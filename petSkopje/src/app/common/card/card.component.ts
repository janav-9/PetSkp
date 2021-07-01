import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogDetailsComponent } from 'src/app/dialog-details/dialog-details.component';
import { AppConfig } from 'src/app/app.config';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(public dialog:MatDialog, public auth: AuthService) { }
  @Input() name : string;
  @Input() address : string;
  @Input() imgRef?: string;  
  @Input() openNow: boolean;
  @Input() rating: number;
  @Input() detailsToken?:string;
  @Input() showFavButton?:boolean = false;
  photourl:string;
  protected apiKey = AppConfig.settings.apiKey;

  private getimg():string{
    return "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="+this.imgRef+"&key="+this.apiKey;
  }

  public openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      detailsToken: this.detailsToken,
  };

    this.dialog.open(DialogDetailsComponent, {data:dialogConfig})
  }

  ngOnInit(){
    this.photourl = this.getimg();
  }

  setVet(){
    
    if (confirm("Дали сте сигурни дека сакате да го поставите матичниот ветеринар?")) {
      this.auth.updateCurrentUser(null, null, this.detailsToken);
    }
  
  }

}
