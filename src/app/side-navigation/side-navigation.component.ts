import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { SideMenu } from 'src/interfaces/menu';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
})
export class SideNavigationComponent implements OnChanges {
  clickedId: number;
  @Input() menus: SideMenu[];

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.menus.currentValue.length === 0) return;
    this.clickedId = changes.menus.currentValue[0].id;
    this.goToDetail(this.menus[0]);
  }

  goToDetail(menu: SideMenu) {
    this.clickedId = menu.id;
    if (menu.params) {
      this.router.navigate([menu.routTo, menu.params]);
    } else {
      this.router.navigate([menu.routTo]);
    }
  }
}
