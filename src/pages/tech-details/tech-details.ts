import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';


/*
  Generated class for the TechDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-tech-details',
  templateUrl: 'tech-details.html'
})
export class TechDetailsPage {
	public name: string;
	public codeNumber: string;
	public phoneNumber: string;
	public address: string;
	public imgurl: string;
	public services;
	public specialization: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertctrl: AlertController) {}

  ionViewDidLoad() {
    //console.log('ionViewDidLoad TechDetailsPage');
  	this.name = this.navParams.get('user_details').name;
  	this.codeNumber = this.navParams.get('user_details').codeNumber;
  	this.phoneNumber = this.navParams.get('user_details').phoneNumber;
  	this.address = this.navParams.get('user_details').address;
  	this.imgurl = this.navParams.get('user_details').imgurl;
  	this.services = this.navParams.get('user_details').services;
  	this.specialization = this.navParams.get('user_details').Specialization;

  //console.log(this.specialization);
  }


  report(code){
  	let showAlert = this.alertctrl.create({
  		title: 'Report Technician',
  		enableBackdropDismiss: false,
  		inputs: [	
  					{
  						type: 'text',
  						placeholder: 'Type here'
  						
  					}
  		],

  		buttons: [
  				{
  					text:'Save',
  					role: 'Save',
  					handler: code =>{
  						console.log('Reported');
  					}
  				},

  				{
  					text: 'Cancel',
  					role: 'Cancel',
  					handler:()=>{
  						showAlert.dismiss();
  					}
  				}
  		]
  	});

  	showAlert.present();

  	
  }



}
