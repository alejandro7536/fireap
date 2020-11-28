import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

import firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userdata$: Observable<firebase.User>;
  public usuario: User = new User();

  constructor(
    private authFire: AngularFireAuth,
    private router: Router
  ) {
    this.userdata$ = this.authFire.authState;
    this.authFire.authState.subscribe(user => {
      if (user) {
          this.usuario.name = user.displayName;
          this.usuario.email = user.email;
          this.usuario.photo = user.photoURL;
          this.usuario.uid = user.uid;
      } else {
        console.log('No hay usuario');
      }
    });
  }


  login() {
     this.authFire.signInWithPopup(new auth.GoogleAuthProvider()).then(() => console.log(this.usuario)).catch(err => console.error('error'));

  }

  logout() {
    this.authFire.signOut();
    this.router.navigateByUrl('/home');

  }
}
