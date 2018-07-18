import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {


    constructor(
        private af: AngularFireAuth
    ) {}

    get user()  {
        return this.af.auth.currentUser;
    }

    get authState() {
        return this.af.authState;
    }

    createUser(email: string, password: string) {
        return this.af.auth
            .createUserWithEmailAndPassword(email, password);
    }

    loginUser(email: string, password: string) {
        return this.af.auth
            .signInWithEmailAndPassword(email, password);
    }

    logoutUser() {
        return this.af.auth
            .signOut();
    }

    isAuthenticated() {
        return this.af.auth.currentUser !== null;
    }
}
