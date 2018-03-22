import { Component, OnInit } from '@angular/core';
import { PermissionTreeEditModel } from '@shared/permission-tree-edit.model';

@Component({
  selector: 'app-tree-antd-demo-basic',
  template: `
    <nz-card nzTitle="Basic">
        <nz-tree [nzNodes]="nodes"
                [nzCheckable]="true"
                (nzEvent)="onEvent($event)"></nz-tree>
    </nz-card>
  `
})
export class PermissionTreeComponent implements OnInit {
  nodes = [];

  ngOnInit() {
    
  }

  onEvent(ev: any) {
    console.log('basic', 'onEvent', ev);
  }
}
