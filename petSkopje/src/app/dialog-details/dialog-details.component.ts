import { Component, OnInit, Input, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PlacesResponse, PlacesDetailsResponse, PlacesResult } from '../models';
import { HttpParams, HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppConfig } from '../app.config';

@Component({
  selector: 'app-dialog-details',
  templateUrl: './dialog-details.component.html',
  styleUrls: ['./dialog-details.component.css']
})
export class DialogDetailsComponent implements OnInit {
  detailsToken:string;
  place:PlacesResult;
  loading:boolean;
  protected apiKey = AppConfig.settings.apiKey;
  lat = 21.3069;
  lng = -157.8583;
  mapType = "satellite";
  constructor(private httpClient: HttpClient, @Inject(MAT_DIALOG_DATA) data) { this.detailsToken = data.data.detailsToken; }


  public getPlaces(): Observable<PlacesDetailsResponse> {
    const self = this;
    let url: string;
     url = "https://maps.googleapis.com/maps/api/place/details/json?place_id="+this.detailsToken+"&key="+this.apiKey+"&language=mk"; 
    return self.httpClient.get<PlacesDetailsResponse>(url);
  }

 ngOnInit() {
   this.loading = true;
  this.getPlaces().subscribe(x => {this.place = x.result; this.loading=false});
  
 }

 private getimg(imgRef: string):string{
  return "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="+imgRef+"&key="+this.apiKey;
}


}
