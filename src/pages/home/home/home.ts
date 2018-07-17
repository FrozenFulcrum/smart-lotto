import { AuthService } from './../../auth/shared/services/auth/auth.service';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private authService: AuthService,
    public navCtrl: NavController) {

  }

  ionViewCanEnter() {
		return this.authService.authState
			.map((user) => {
				if (!user) {
					// navigate to some other page
				}

				return !!user;
			})
	}

}
