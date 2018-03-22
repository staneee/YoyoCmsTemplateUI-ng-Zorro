import { Component, Injector, Input, OnInit } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';
import { zip } from 'rxjs/observable/zip';

import { ModalComponentBase, ModalSubjectEvent } from '@shared/component-base';
import { FormGroup, FormBuilder, Validators, FormControl, AsyncValidatorFn, AbstractControl } from '@angular/forms';
import {
	PermissionServiceProxy, RoleServiceProxy,
	RoleEditDto, CreateOrUpdateRoleInput,
	GetRoleForEditOutput,
	ListResultDtoOfFlatPermissionWithLevelDto
} from '@shared/service-proxies/service-proxies';

@Component({
	templateUrl: './edit-role.component.html',
	styles: []
})
export class EditRoleComponent extends ModalComponentBase implements OnInit, ModalSubjectEvent.OnShow {

	@Input() id: number;

	saving: boolean = false;

	permissions: ListResultDtoOfFlatPermissionWithLevelDto = null;
	input: CreateOrUpdateRoleInput = new CreateOrUpdateRoleInput();
	permissionOptions: { label: string, value: string, checked: boolean }[];

	validateForm: FormGroup;

	constructor(
		injector: Injector,
		private _permissionService: PermissionServiceProxy,
		private _roleService: RoleServiceProxy,
		private formBuilder: FormBuilder
	) {
		super(injector);
	}

	ngOnInit(): void {
		this.saving = true;
		zip(
			this._permissionService.getAllPermissions(),
			this._roleService.getRoleForEdit(this.id)
		)
		.finally(() => { this.saving = false; })
		.subscribe(([permissions, result]) => {
			this.permissions = permissions;
			this.input.role = result.role;
			let options = [];
			permissions.items.forEach(item => {
				options.push({ label: this.l(item.displayName), value: item.name, checked: false });
			});
			options.filter((item) => result.grantedPermissionNames.indexOf(item.value) >= 0).map(item => { item.checked = true });
				this.permissionOptions = options;
		});

		this.validateForm = this.formBuilder.group({
			roleName: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(32)])],
			displayName: [null, Validators.compose([Validators.required, Validators.maxLength(32)])],
			description: [null, Validators.compose([Validators.required, Validators.maxLength(32)])],
			permissions: []
		});
	}

	onShow(): void {
		//注意 onShow 会在 ngOnInit 前执行，onShow是在NzModalSubject收到onShow事件时执行的。这是ng-zorro的问题
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
		var permissions = [];

		this.permissionOptions.forEach(element => {
			if (element.checked)
				permissions.push(element.value);
		});

		this.input.grantedPermissionNames = permissions;

		this.saving = true;
		this._roleService.createOrUpdateRole(this.input)
			.finally(() => { this.saving = false; })
			.subscribe(() => {
				this.notify.success(this.l('SavedSuccessfully'));
				this.success();
			});
	}

}
