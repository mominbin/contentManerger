import { Component, Injector, Input, Type } from '@angular/core';

import { PresetnerService } from './presenter.service';
@Component({
  selector: 'app-presenter',
  templateUrl: 'presenter.component.html',
})
export class PresenterComponent {
  @Input() config: { type: string };

  constructor(private presenterService: PresetnerService) {}
  ngOnInit() {}
  getComponent(type: string): Type<any> {
    return this.presenterService.getComponent(this.config.type);
  }
}
