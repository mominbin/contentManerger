import { TestBed } from '@angular/core/testing';
import { MenuService } from '../page-container/menu.service';

import { TopNavigationComponent } from './top-navigation.component';

describe('TopNavigationComponent', () => {
  let component: TopNavigationComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: MenuService,
          useValue: {},
        },
      ],
    });
    component = new TopNavigationComponent(TestBed.inject(MenuService));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
