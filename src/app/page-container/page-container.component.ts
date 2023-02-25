import { Component, OnInit } from '@angular/core';
import { SideMenu, TopMenu } from 'src/interfaces/menu';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss'],
})
export class PageContainerComponent implements OnInit {
  leftMenusSet: SideMenu[] = [];
  leftMenus: SideMenu[] = [];
  topMenus: TopMenu[] = [];
  currentTopMenuId: number;

  constructor(private menuService: MenuService) {}

  async ngOnInit(): Promise<void> {
    await this.initMenu();
  }

  async initMenu() {
    await this.menuService.init();
    this.topMenus = this.menuService.topMenusSet;
    this.currentTopMenuId = this.topMenus[0].id;
    this.leftMenus = this.getLeftMenusByCurrentTopMenuId();
  }

  onClickTopMenu(menuId: number) {
    this.currentTopMenuId = menuId;
    this.leftMenus = this.getLeftMenusByCurrentTopMenuId();
  }

  private getLeftMenusByCurrentTopMenuId() {
    return this.menuService.leftMenusSet.filter(
      (menu) => menu.parentId === this.currentTopMenuId
    );
  }
}
