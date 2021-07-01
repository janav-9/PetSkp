import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Pet } from '../models';
import { MatDialog } from '@angular/material';
import { AddPetDialogComponent } from '../add-pet-dialog/add-pet-dialog.component';
import { AuthService } from '../auth.service';
import { SwPush } from '@angular/service-worker';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-mypet',
  templateUrl: './mypet.component.html',
  styleUrls: ['./mypet.component.css']
})
export class MypetComponent implements OnInit {
  myArray: Pet[] = [];
  public cols: number;
  isChecked = true;
  notifPet: boolean = true;
  notifProd: boolean = true;
  vapidKeys: string = `BNF5hmxX5kcE-xV0Ec05AtWmNXtJyLng6cHVL7n0SXB11qEEVIUuddkVNe4HZ7TeTDs51K-Kp26GpFEIzA5sdr8`;


  constructor(private afs: AngularFirestore, private swPush: SwPush, private service: NotificationService, public dialog: MatDialog, public auth: AuthService) {
  }

  updateUser(np:boolean, npr:boolean) {
    this.auth.updateCurrentUser(np, npr);
    this.notifPet = np;
    this.notifProd= npr;
  }


  ngOnInit(): void {
    this.cols = (window.innerWidth <= 1200) ? 1 : 2;
    this.getPets();
  }
  getPets() {
    this.myArray = [];
    this.afs.collection("pets", ref => ref.where("Userid", "==", this.auth.userUid)).get()
      .subscribe((ss) => {
        ss.docs.forEach((doc) => {
          let pet = doc.data() as Pet;
          pet.Uid = doc.id;
          this.myArray.push(pet);
        });
      });
  }

  public openDialog() {
    this.dialog.open(AddPetDialogComponent).afterClosed()
      .subscribe(() => this.getPets());
  }

  deletePet(uid: string) {

    if (confirm("Дали сте сигурни дека сакате да го избришете миленичето?")) {
      this.afs.collection("pets").doc(uid).delete().then(() => {
        this.ngOnInit();
      }).catch((error) => {
        console.error("Error removing document: ", error);
      });
    }
  }

  getAge(birthdate: Date): number {
    let timeDiff = Math.abs(Date.now() - birthdate.getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
    return age
  }


  onResize(event) {
    this.cols = (event.target.innerWidth <= 1200) ? 1 : 2;
  }

  
  sendNotification() {
    if (this.swPush.isEnabled && this.notifPet) {
      this.swPush.requestSubscription({
        serverPublicKey: this.vapidKeys
      })
      .then(sub => {
        this.service.postSubscription(sub).subscribe();
      })
      .catch(console.error);
    }
  }
}
