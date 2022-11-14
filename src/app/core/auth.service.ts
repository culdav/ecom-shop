import { Injectable } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/local-storage.service';

interface UserInfo {
  displayName: string;
  createdAt: Date;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  userData: any;
  static instances = 0;

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
    AuthService.instances++;
    console.log('AuthService instances:', AuthService.instances);
    this.listenToAuthChanges();
  }

  signIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((_) => {
        this.afAuth.authState.subscribe((user) => {
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
    return this.authLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['shop']);
    });
  }

  private listenToAuthChanges(): void {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        this.localStorageService.user = JSON.stringify(this.userData);
      } else {
        this.localStorageService.user = 'null';
      }
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

  private authLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((_) => {
        this.router.navigate(['shop']);
      })
      .catch((error) => {
        window.alert(error);
      });
  }
}
