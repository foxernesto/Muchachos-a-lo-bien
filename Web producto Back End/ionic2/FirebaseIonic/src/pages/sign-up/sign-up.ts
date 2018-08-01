import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  // email : string = "cursoIonic@gmail.com";
  email : string;

  password : string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
                              private angularFire: AngularFireAuth // direccion de dependencia en angular buscar en angular o type script
                            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  createAccount(){
    // console.log(":)");
    this.angularFire.auth.createUserAndRetrieveDataWithEmailAndPassword(this.email,this.password);

  }
}
