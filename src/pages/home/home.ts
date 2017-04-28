import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { TechDetailsPage } from '../tech-details/tech-details';

import { DataSource } from '../../providers/data-source';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public results = [];
searchTerm:string;
searching:any = false;

  constructor(public navCtrl: NavController , public dataBank: DataSource) {
    
  }

  ionViewDidLoad(){
  this.initializeItems();
  }


  initializeItems(){
    this.dataBank.getData().subscribe((techs) => {
      this.results = techs;
     //console.log(techs);

        })
  }


getItems(ev:any){

  

 let val = ev.target.value;
  if (val && val.trim() != '') {
      this.results = this.results.filter((item) => {
        return (item.Specialization.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
      //console.log(this.results);
    }else{
      this.initializeItems();
      
    }

}

showDetails(query){
  this.navCtrl.push(TechDetailsPage, {

  user_details:query });
  //console.log(query);
}

}
