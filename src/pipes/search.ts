import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the Search pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'search',
  pure: true
})
@Injectable()
export class Search {
  transform(result: any[], searchTerm: string): any[] {
     if (searchTerm) {
        searchTerm = searchTerm.toLowerCase();
        return result.filter(item => {
          return item[0].address.toLowerCase().indexOf(searchTerm) !== -1 
        });
      } else {
        return result;
      }
  }
}
