import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { ModalHelper } from '@shared/helpers/modal.helper';
import { PagedListingComponentBase, PagedRequestDto } from "shared/component-base";
import { UserServiceProxy, PagedResultDtoOfUserListDto, UserListDto } from '@shared/service-proxies/service-proxies';

import { CreateUserComponent } from "./create-user/create-user.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { CreateOrEditUserComponent } from '@app/pages/users/create-or-edit-user.component';

@Component({
	templateUrl: './users.component.html'
})
export class UsersComponent extends PagedListingComponentBase<UserListDto> {

	loading = false;
	dataItems: UserListDto[] = [];

	constructor(
		private injector: Injector,
		private _userService: UserServiceProxy,
		private modalHelper: ModalHelper
	) {
		super(injector);
	}

	list(request: PagedRequestDto, pageNumber: number, finishedCallback: Function): void {
		this.loading = true;

		this._userService.getUsers(undefined, undefined, undefined, undefined, request.maxResultCount, request.skipCount)
			.finally(() => {
				finishedCallback();
				this.loading = false;
			})
			.subscribe((result) => {
				this.dataItems = result.items;
				//this.showPaging(result, pageNumber);
			});
	}

	delete(user: UserListDto): void {
		this.message.confirm(
			"Delete user '" + user.name + user.surname + "'?",
			(result: boolean) => {
				if (result) {
					this.l
					this._userService.deleteUser(user.id)
						.finally(() => {
							this.notify.info("Deleted User: " + user.name);
							this.refresh();
						})
						.subscribe(() => { });
				}
			}
		);
	}

	create(): void {
		this.modalHelper.open(CreateOrEditUserComponent, { isEdit: false }).subscribe(res => this.refresh());
	}

	edit(user: UserListDto): void {
		this.modalHelper.open(CreateOrEditUserComponent, { id: user.id, isEdit: true }).subscribe(res => this.refresh());
	}
}