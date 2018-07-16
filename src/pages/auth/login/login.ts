import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular/umd';

@IonicPage()
@Component({
    selector: 'login-page',
    template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Login</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>
      <login-form></login-form>
    </ion-content>
    `
})
export class LoginPage {
}
