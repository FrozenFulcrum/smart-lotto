import { AuthService } from './../../auth/shared/services/auth/auth.service';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'tabs-page',
  template: `
    <h3>CURRENT : {{ current | json }}</h3>
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
    if (!this.authService.isAuthenticated()) {
      this.navCtrl.push('LoginPage');
    }
  }

  ionViewWillEnter() {
    this.current = this.authService.user;
  }
}
