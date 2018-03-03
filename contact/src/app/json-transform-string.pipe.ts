import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './modules/contact';


@Pipe({
  name: 'jsonTransformString'
})
export class JsonTransformStringPipe implements PipeTransform {

  transform(value: Contact, args?: any): string {
    return  `${value.name}  ${value.surname}`;
  }

}
