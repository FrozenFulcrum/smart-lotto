import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular/umd';

@IonicPage()
@Component({
    selector: 'register-page',
    template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Register</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>
      <registration-form>
        <button ion-button type="submit">
            Create account
          </button>
          <div class="error" *ngIf="error">
            {{ error }}
          </div>
      </registration-form>
    </ion-content>
    `
})
export class RegisterPage {

  error = undefined;
}
