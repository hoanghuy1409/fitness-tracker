import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";

import { AuthData } from "./auth-data.model";
import { User } from "./user.model";

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User;

  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  registerUser(authData: AuthData) {
    this.afAuth.auth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(res => {
        console.log(res);
        this.authSuccessfully();
      })
      .catch(err => console.warn(err));
  }

  login(authData: AuthData) {
    this.afAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(res => {
        console.log(res);
        this.authSuccessfully();
      })
      .catch(err => console.warn(err));
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(["/login"]);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user != null;
  }

  private authSuccessfully = () => {
    this.authChange.next(true);
    this.router.navigate(["/training"]);
  };
}
