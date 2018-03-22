import { Component, Injector, Input, OnInit } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';
import { zip } from 'rxjs/observable/zip';

import { ModalComponentBase, ModalSubjectEvent } from '@shared/component-base';
import { FormGroup, FormBuilder, Validators, FormControl, AsyncValidatorFn, AbstractControl } from '@angular/forms';

import {
    UserServiceProxy, CreateOrUpdateUserInput,
    RoleServiceProxy, RoleListDto,ListResultDtoOfRoleListDto, UserEditDto
} from '@shared/service-proxies/service-proxies';

@Component({
    templateUrl: './edit-user.component.html'
})
export class EditUserComponent extends ModalComponentBase implements OnInit {

    @Input() id: number;

    saving: boolean = false;

    input: CreateOrUpdateUserInput = new CreateOrUpdateUserInput();
    validateForm: FormGroup;
    roles: ListResultDtoOfRoleListDto = null;
    roleOptions: { label: string, value: string, checked: boolean }[];

    constructor(
        injector: Injector,
        private _roleService:RoleServiceProxy,
        private _userService: UserServiceProxy,
        private formBuilder: FormBuilder
    ) {
        super(injector);
    }

    ngOnInit(): void {
        this.saving = true;
        zip(
            this._roleService.getRoles(''),
            this._userService.getUserForEdit(this.id)
        )
            .finally(() => { this.saving = false; })
            .subscribe(([roles, result]) => {

                this.roles = roles;
                this.input.user= result.user;

                let options = [];
                roles.items.forEach(item => {
                    options.push({ label: this.l(item.displayName), value: item.name, checked: false });
                });

                options.filter((item) => result.roles.indexOf(item.value) >= 0).map(item => { item.checked = true });

                this.roleOptions = options;
            });


        this.validateForm = this.formBuilder.group({
            email: [null, [Validators.email]],
            username: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(32)])],
            name: [null, Validators.compose([Validators.required, Validators.maxLength(32)])],
            surname: [null, Validators.compose([Validators.required, Validators.maxLength(32)])],
            isactive: [null],
            editrolegroup: [null]
        }, );
    }

    userInRole(role: RoleListDto, user: CreateOrUpdateUserInput): boolean {
        if (user.assignedRoleNames.indexOf(role.name) !== -1) {
            return true;
        }
        else {
            return false;
        }
    }

    userInRoles() {
        this.roleOptions.forEach(role => {
            if (this.input.assignedRoleNames.indexOf(role.value) !== -1) {
                role.checked = true;
            }
            else {
                role.checked = false;
            }
        });
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

    save(e): void {
        var roles = [];

        this.roleOptions.forEach(element => {
            if (element.checked)
                roles.push(element.value);
        });

        this.input.assignedRoleNames = roles;

        this.saving = true;
        this._userService.createOrUpdateUser(this.input)
            .finally(() => { this.saving = false; })
            .subscribe(() => {
                this.notify.success(this.l('SavedSuccessfully'));
                this.success();
            }); 
    }
}
