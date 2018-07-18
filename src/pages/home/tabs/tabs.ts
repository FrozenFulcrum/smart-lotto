import { AuthService } from './../../auth/shared/services/auth/auth.service';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ResultsComponent } from '../shared/components/results/results.component';
import { PoolManagerComponent } from '../shared/components/pool-manager/pool-manager.component';

@IonicPage()
@Component({
  selector: 'tabs-page',
  templateUrl:'tabs.html'
})
export class TabsPage {

  tab1Root = ResultsComponent;
  tab2Root = PoolManagerComponent;
  //tab3Root = ContactPage;
  current: any;

  constructor(
    private authService: AuthService,
    public navCtrl :NavController
  ) {}

  ionViewCanEnter() {
    //if (!this.authService.isAuthenticated()) {
      //this.navCtrl.push('LoginPage');
    //}
  }

  ionViewWillEnter() {
    this.current = this.authService.user;
  }
}
