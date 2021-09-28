import { Pipe, PipeTransform } from '@angular/core';
import { Categoria } from 'src/app/interfaces/categorias.interface';

@Pipe({
  name: 'pais'
})
export class PaisPipe implements PipeTransform {

  transform(value: Categoria[], query: number): any {
    if(query === 0 || query === undefined || query === -1) {
      return value;
    }
    
    // return value.filter(serv => serv.id_pais.indexOf(query) != -1)
    console.log(value.filter(serv => serv.id_pais == query));
    return value.filter(serv => serv.id_pais == query);
  }

}
