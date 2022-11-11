import { Injectable } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

interface UserInfo {
  displayName: string;
  createdAt: Date;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  userData: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    private localStorageService: LocalStorageService
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorageService.user = JSON.stringify(this.userData);
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorageService.user = 'null';
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  signIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.setUserData(result.user);
        this.afAuth.authState.subscribe((user) => {
          console.log('user', user);
          if (user) {
            this.router.navigate(['shop']);
          }
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  signUp(email: string, password: string, displayName: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.setUserData(result.user, {
          displayName,
          createdAt: new Date(),
        });
        this.router.navigate(['shop']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  signOut() {
    return this.afAuth.signOut().then(() => {
      this.localStorageService.user = null;
      this.router.navigate(['auth']);
    });
  }

  googleAuth() {
    return this.afAuth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then((res: any) => console.log('Logged in with google'))
      .then((result) => this.router.navigate(['shop']))
      .catch((error) => {
        window.alert(error);
      });
  }

  private authLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['shop']);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  private setUserData(user: any, additionalInformation?: UserInfo) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData = {
      uid: user.uid,
      displayName: user.displayName || additionalInformation?.displayName,
      email: user.email,
      createdAt: user.createdAt || additionalInformation?.createdAt,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
}
