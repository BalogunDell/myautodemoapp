import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the DataSource provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataSource {
  result = [];
  constructor(public http: Http) {
    //console.log('Hello DataSource Provider');
  }

  public datasample = 'assets/datasample.json';
  public reply;
 getData(): Observable<any>{
	return this.http.get(this.datasample)
	.map((response) => {
	this.result = response.json();
  return this.result;
	});

 }


}
