import { MenuService } from './menu.service';
import { PageContainerComponent } from './page-container.component';
import { TestBed } from '@angular/core/testing';

describe('PageContainerComponent', () => {
  let component: PageContainerComponent;
  let menuService: MenuService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MenuService,
          useValue: {
            init: jest.fn(),
            topMenuSet: [],
            sideMenuSet: [],
          },
        },
      ],
    }).compileComponents();

    menuService = TestBed.inject(MenuService);
    jest.spyOn(menuService, 'init').mockReturnValue(Promise.resolve());

    component = new PageContainerComponent(TestBed.inject(MenuService));
  });

  it('should init the menus', async () => {
    const topMenus = [
      { id: 1, key: 'Video Handle', label: 'Video Handle', children: [] },
    ];
    const leftMenus = [
      {
        id: 1,
        key: '菜单1-1',
        label: '菜单1-1',
        children: [],
        parentId: 1,
      },
    ];

    menuService.topMenusSet = topMenus;
    menuService.leftMenusSet = leftMenus;

    await component.initMenu();

    expect(component.topMenus).toEqual(topMenus);
    expect(component.currentTopMenuId).toEqual(1);
    expect(component.leftMenus).toEqual(leftMenus);
  });
});
