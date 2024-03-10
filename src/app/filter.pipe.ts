import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) return null;
    if(!args) return null;

    args=args.toLowerCase();
    return value.filter(function(item:any){
      return JSON.stringify(item.name).toLowerCase().includes(args);
    }).slice(0,6)
  }


}
