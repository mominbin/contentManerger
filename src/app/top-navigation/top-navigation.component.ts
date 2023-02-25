import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuService } from '../page-container/menu.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['../../assets/style/shared.scss'],
})
export class TopNavigationComponent implements OnInit {
  title: string;
  clickedId = 1;

  @Input() menus: { id: number; name: string }[] = [];
  @Output() topMenuClicked = new EventEmitter<number>();

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.title = this.menuService.title;
  }

  onClickTopMenu(menuId: number) {
    this.clickedId = menuId;
    this.topMenuClicked.emit(menuId);
  }
}
