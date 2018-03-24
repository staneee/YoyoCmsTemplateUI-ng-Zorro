import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { LayoutModule } from '../layout/layout.module';
import { PagesRoutingModule } from './pages.routing.module'

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import {CreateOrEditRoleComponent} from './roles/create-or-edit-role.component'
import { TenantsComponent } from './tenants/tenants.component';
import { AboutComponent } from './about/about.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { CreateUserComponent } from "./users/create-user/create-user.component";
import { PermissionTreeComponent } from '@shared/permission-tree.component';
import { CreateOrEditUserComponent } from '@app/pages/users/create-or-edit-user.component';

@NgModule({
    imports: [
        SharedModule,
        LayoutModule,
        CommonModule,
        FormsModule,
        PagesRoutingModule
    ],
    declarations: [
        HomeComponent,
        UsersComponent,
        RolesComponent,
        TenantsComponent,
        AboutComponent,
        EditUserComponent,
        CreateUserComponent,
        CreateOrEditRoleComponent,
        PermissionTreeComponent,
        CreateOrEditUserComponent
    ],
    entryComponents: [
        CreateUserComponent,
        EditUserComponent,
        CreateOrEditRoleComponent,
        CreateOrEditUserComponent
    ]
})

export class PagesModule {}
