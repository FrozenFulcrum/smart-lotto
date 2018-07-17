import { AuthService } from './../../auth/shared/services/auth/auth.service';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'tabs-page',
  template: `
    <h3>CURRENT : {{ current }}</h3>
  `
})
export class TabsPage {

  // tab1Root = HomePage;
  // tab2Root = ManageLottoPage;
  // tab3Root = ContactPage;
  current: any;

  constructor(
    private authService: AuthService,
    public navCtrl :NavController
  ) {}

  ionViewCanEnter() {
    this.navCtrl.push('LoginPage');
  }
}