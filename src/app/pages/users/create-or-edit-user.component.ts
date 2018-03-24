import { CreateOrUpdateEditionDto } from './../../../shared/service-proxies/service-proxies';
import { Component, ViewChild, Injector, Output, EventEmitter, ElementRef, OnInit, Input } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';

import { ModalComponentBase, ModalSubjectEvent } from '@shared/component-base';
import { FormGroup, FormBuilder, Validators, FormControl, AsyncValidatorFn, AbstractControl, ValidatorFn } from '@angular/forms';

import { Observable } from 'rxjs/Observable';


import {
    UserServiceProxy, CreateOrUpdateUserInput,
    RoleServiceProxy, RoleListDto, ListResultDtoOfRoleListDto, UserEditDto
} from '@shared/service-proxies/service-proxies';
import { zip } from 'rxjs/observable/zip';
import { AppConsts } from '@shared/AppConsts';

@Component({
    templateUrl: './create-or-edit-user.component.html'
})
export class CreateOrEditUserComponent extends ModalComponentBase implements OnInit {
    @Input() id: number = -1;
    @Input() isEdit: boolean = false;
    title: string;
    input: CreateOrUpdateUserInput = new CreateOrUpdateUserInput();
    canChangeUserName: boolean=true;
    validateForm: FormGroup;
    roles: ListResultDtoOfRoleListDto = null;
    roleOptions: { label: string, value: string, checked: boolean }[];
    passwordInput: AbstractControl;
    checkPasswordInput: AbstractControl;

    constructor(
        injector: Injector,
        private _roleService: RoleServiceProxy,
        private _userService: UserServiceProxy,
        private formBuilder: FormBuilder
    ) {
        super(injector);
    }

    ngOnInit(): void {
        this.input.user = new UserEditDto();

        if (!this.isEdit) {
            this.title = this.l('CreateUser');
            this.create();
        } else {
            this.edit();
        }

        this.validateForm = this.formBuilder.group({
            email: [null, [Validators.email]],
            password: ['', [Validators.required]],
            checkPassword: ['', [this.confirmationValidator]],
            username: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(32)])],
            name: [null, Validators.compose([Validators.required, Validators.maxLength(32)])],
            surname: [null, Validators.compose([Validators.required, Validators.maxLength(32)])],
            phoneNumber: [],
            isactive: [true],
            rolegroup: [true],
            setRandomPassword: [true],
            shouldChangePasswordOnNextLogin: [true],
            sendActivationEmail: [true],
            isLockoutEnabled: [true]
        });

        this.passwordInput = this.getFormControl('password');
        this.checkPasswordInput = this.getFormControl('checkPassword');

        if (this.isEdit) {
            this.passwordInput.clearValidators();
            this.checkPasswordInput.clearValidators();
            this.setRandomPassword(undefined);
        }

        this.resetForm();
    }

    create(): void {
        zip(
            this._roleService.getRoles(undefined)
        ).finally(() => { })
            .subscribe(([roles]) => {
                this.canChangeUserName = true;
                this.roles = roles;
                this.roleOptions = [];
                roles.items.forEach(item => {
                    this.roleOptions.push({ label: this.l(item.displayName), value: item.name, checked: true });
                });
            });
    }

    edit(): void {
        zip(
            this._roleService.getRoles(undefined),
            this._userService.getUserForEdit(this.id)
        )
            .finally(() => { })
            .subscribe(([roles, result]) => {
                this.roles = roles;
                this.input.user = result.user;
                this.input.user.password = '';
                this.checkPasswordInput.setValue('');
                this.title = this.l('EditUser') + ' : ' + result.user.userName;
                // 判断是否为管理员用户
                this.canChangeUserName = result.user.userName !== AppConsts.userManagement.defaultAdminUserName;
                let options = [];

                roles.items.forEach(item => {
                    options.push({ label: this.l(item.displayName), value: item.name, checked: false });
                });

                let i = 0;
                options.forEach(item => {
                    for (i = 0; i < result.roles.length; i++)
                        if (item.value === result.roles[i].roleName) {
                            item.checked = true;
                            break;
                        }
                });

                this.roleOptions = options;
            });
    }


    confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
        if (!this.isEdit) {
            if (!this.input.setRandomPassword) {
                if (!control.value) {
                    return { required: true };
                } else if (control.value !== this.passwordInput.value) {
                    return { confirm: true, error: true };
                }
            }
        }
        return {};
    }

    // 动态创建 密码/确认密码
    setRandomPassword(ev: any) {
        if (this.input.setRandomPassword) {
            this.validateForm.removeControl('password');
            this.validateForm.removeControl('checkPassword');
        } else if (!this.input.setRandomPassword) {
            this.validateForm.addControl('password', this.passwordInput);
            this.validateForm.addControl('checkPassword', this.checkPasswordInput);
        }
    }
    getFormControl(name: string) {
        return this.validateForm.controls[name];
    }

    resetForm($event?: MouseEvent) {
        if ($event) $event.preventDefault();

        this.validateForm.reset();
        for (const key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsPristine();
        }
    }

    subCheck(e): boolean {
        // 如果是编辑模式，对密码进行校验
        if (this.isEdit) {
            if (this.passwordInput.value !== this.checkPasswordInput.value) {
                return false;
            }
        }
    }

    save(e): boolean {
        var roles = [];

        this.roleOptions.forEach(element => {
            if (element.checked)
                this.input.assignedRoleNames.push(element.value);
        });

        if (this.isEdit) {
            if (this.passwordInput.value !== this.checkPasswordInput.value) {
                this.checkPasswordInput.setErrors({ confirm: true, error: true })
                return false;
            }
        } else if (!this.isEdit) {
            if (this.input.setRandomPassword) {
                this.input.user.password = null;
            }
        }


        this._userService.createOrUpdateUser(this.input)
            .finally(() => {  })
            .subscribe(() => {
                this.notify.success(this.l('SavedSuccessfully'));
                this.success();
            });
    }

}
