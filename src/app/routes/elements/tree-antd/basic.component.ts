import { CommonLookupServiceProxy } from './../../../../shared/service-proxies/service-proxies';
import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { generateData } from './generate-data';
import { TreeNode, ITreeOptions } from 'angular-tree-component';
import { NzTreeComponent } from 'ng-tree-antd';
import { TreeOptions } from 'angular-tree-component/dist/models/tree-options.model';
import { RoleServiceProxy, PermissionServiceProxy, ListResultDtoOfFlatPermissionWithLevelDto, FlatPermissionWithLevelDto } from '@shared/service-proxies/service-proxies';
import { zip } from 'rxjs/observable/zip';

@Component({
  selector: 'app-tree-antd-demo-basic',
  template: `
    <nz-card nzTitle="Basic">
        <nz-tree #myTree [nzNodes]="nodes"
                [nzCheckable]="true"></nz-tree>
    </nz-card>
  `
})
//                 (nzEvent)="onEvent($event)"
export class TreeAntdBasicComponent implements OnInit {

  @ViewChild("myTree") myTree: NzTreeComponent;

  nodes = [];

  treeOptions: ITreeOptions = {
    displayField: 'name'
  };
  selectedNodes = [];

  constructor(
    injector: Injector,
    private _permissionService: PermissionServiceProxy,
    private _roleService: RoleServiceProxy
  ) {

  }
  ngOnInit() {
    this.myTree.nzOptions = this.treeOptions;

    generateData(this.nodes, 3, 2, 1);
  }

  // 获取所有被选中项的名字
  getGrantedPermissionNames(): string[] {
    let permissionNames = [];
    this.myTree.nzNodes.forEach((node, index, arr) => {
      this.getSelectedElementName(node,permissionNames);
    });
    return permissionNames;
  }
  getSelectedElementName(node: any,permissionNames:string[]): void {
    // 1、判断是否选中或有部分子项被选中
    if (node.checked || node.halfChecked) {
      // 
      permissionNames.push(node.displayName);

      // 2、判断是否有子项
      if (node.children && node.children.constructor === Array) {
        node.children.forEach(element => {
          this.getSelectedElementName(element,permissionNames);
        });
      }
    }
  }

}
