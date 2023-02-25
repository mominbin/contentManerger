export interface TopMenu extends Menu {
  children: TopMenu[];
}

export interface SideMenu extends Menu {
  parentId: number;
  routTo: string;
  params?: string;
  children: SideMenu[];
}

export interface Menu {
  id: number;
  key: string;
  label: string;
  children: Menu[];
}
