import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular/umd';

@IonicPage()
@Component({
    selector: 'login-page',
    template: `
        <h3>Login Page</h3>
        <login-form></login-form>
    `
})
export class LoginPage {
}