import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { User } from './models';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { switchMap, take } from 'rxjs/operators';
import * as firebase from 'firebase';


@Injectable({ providedIn: 'root' })
export class AuthService {
    public user$: Observable<User>;
    public userUid: string;

    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router
    ) {
        this.user$ = this.afAuth.authState.pipe(
            switchMap(user => {
                if (user) {
                    this.userUid = user.uid;
                    return this.afs.doc<firebase.User>(`users/${user.uid}`).valueChanges();
                }
                else {
                    return of(null);
                }
            })
        );
    }

    async GoogleSignIn() {
        const provider = new firebase.auth.GoogleAuthProvider();
        const credential = await this.afAuth.auth.signInWithPopup(provider);
        return this.updateUserData(credential.user);
    }

    public updateUserData(user: firebase.User, ) {
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

        const data: User = {
            uid: user.uid,
            email: user.email
        }

        return userRef.set(data, { merge: true })

    }

    public updateCurrentUser(notifPet?: boolean, notifProd?: boolean, vetUid?: string) {
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${this.userUid}`);

        const data: User = {
            uid: this.userUid,
        }

        if (notifPet != null && notifProd != null) {
            data.notifPet = notifPet;
            data.notifProd = notifProd;
        }
        if (vetUid) {
            data.vetUid = vetUid;
        }

        return userRef.set(data, { merge: true })

    }

    async signOut() {
        await this.afAuth.auth.signOut();
        this.router.navigate(['/']);
    }
}