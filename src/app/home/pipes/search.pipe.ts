import { Pipe, PipeTransform } from '@angular/core';
import { Servicio } from 'src/app/interfaces/servicio.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Servicio[], query: string): any {
    if(query === '' || query === undefined) {
      return value;
    }
    
    return value.filter(serv => serv.str_descripcion.toLowerCase().indexOf(query) != -1)
    // return value.filter(serv => serv.id_pais == query);
  }


}
