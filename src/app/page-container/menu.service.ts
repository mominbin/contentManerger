import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SideMenu, TopMenu } from '../../interfaces/menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  leftMenusSet: SideMenu[] = [];
  topMenusSet: TopMenu[] = [];
  title = 'Content Manager';

  constructor(private http: HttpClient) {}

  async init() {
    const data = await this.http
      .get<{ topMenus: TopMenu[]; sideMenus: SideMenu[] }>(
        '/assets/menus/menus.json'
      )
      .toPromise();
    this.topMenusSet = data.topMenus;
    this.leftMenusSet = data.sideMenus;
  }
}
