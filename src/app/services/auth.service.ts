import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth, database } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap, merge } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router : Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user =>{
        if(user){
          return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    )
   }

   async googleSignin(){
     const provider = new auth.GoogleAuthProvider();
     const credential = await this.afAuth.auth.signInWithPopup(provider);
     return this.updateUserData(credential.user)
   }

   async twitterSignin(){
    const provider = new auth.TwitterAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user)
  }

   async signOut(){
     await this.afAuth.auth.signOut();
     return this.router.navigate(['/']);
   }

   private updateUserData({uid , email, displayName }: any) {
     const userRef : AngularFirestoreDocument<any> = this.afs.doc(`users/${uid}`);

      let data ={
       uid,
       displayName,
       email
     }
     return userRef.set(data, {merge:true});
     
   }
}
