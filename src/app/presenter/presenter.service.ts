import { Injectable, Type } from '@angular/core';
import { CmComponentEnum } from 'src/enumeration/mat.enum';
import { InputComponent } from '../components/input/input.component';

@Injectable({
  providedIn: 'root',
})
export class PresetnerService {
  components = {
    [CmComponentEnum.Input]: InputComponent,
  };

  getComponent(type: string): Type<any> {
    return this.components[type];
  }
}
