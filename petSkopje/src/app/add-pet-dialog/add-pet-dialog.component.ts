import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../auth.service';
import { Pet } from '../models';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-pet-dialog',
  templateUrl: './add-pet-dialog.component.html',
  styleUrls: ['./add-pet-dialog.component.css'],
  providers: [DatePipe]
})
export class AddPetDialogComponent implements OnInit {

  public pet: Pet = {
    Breed: '',
    Gender: '',
    Name: '',
    Type: '',
    Userid: '',
    Birthdate: new Date()
  };

  birthDate: any;
  rabiesDate: any;
  parvoDate: any;
  parasitesDate: any;
  ampuleDate: any;
  groomerDate: any;

  maxDate: Date = new Date();

  constructor(@Inject(MAT_DIALOG_DATA) data, private afs: AngularFirestore, public auth: AuthService) {
  }

  ngOnInit() {

  }

  savePet() {

    this.pet.Birthdate = this.birthDate;
    if (this.parasitesDate != undefined) {
      this.pet.ParasitesDate = this.parasitesDate;
    }

    if (this.parvoDate != undefined) {
      this.pet.DateParvo = this.parvoDate;
    }
    if (this.rabiesDate != undefined) {
      this.pet.DateRabies = this.rabiesDate;
    }
    if (this.ampuleDate != undefined) {
      this.pet.AmpuleDate = this.ampuleDate;
    }
    if (this.groomerDate != undefined) {
      this.pet.Groomer = this.groomerDate;
    }
    this.pet.Userid = this.auth.userUid;

     this.afs.collection('pets').add(this.pet)
     .then(res => {
     })
     .catch(e => {
         console.log(e);
     })

     
  }
}
