import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlacesResult, PlacesResponse, PetShopResult } from '../models';
import { Observable } from 'rxjs';
import { AppConfig } from '../app.config';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  public places: PlacesResult[];
  public filteredPlaces: PlacesResult[];
  public token: string;
  dataSource: MatTableDataSource<PlacesResult>;
  obs: Observable<any>;
   myArray: PetShopResult[];
  protected apiKey = AppConfig.settings.apiKey;
  constructor(private httpClient: HttpClient,private changeDetectorRef: ChangeDetectorRef,private afs: AngularFirestore) { }


   public getPlaces(token?:string): Observable<PlacesResponse> {
     const self = this;
     let url: string;
     if(token != null || token != undefined){
      url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?pagetoken=&"+token+"key="+this.apiKey+"language=mk"; 
     }
     else{
      url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=petshops+in+skopje&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key="+this.apiKey+"&language=mk"; 
     }
     return self.httpClient.get<PlacesResponse>(url);
   }

  ngOnInit() {
   this.getPlaces().subscribe(x => {
     this.places = x.results; 
     this.token = x.next_page_token; 
     this.filteredPlaces = x.results ; 
     this.dataSource = new MatTableDataSource<PlacesResult>(this.filteredPlaces);
     this.changeDetectorRef.detectChanges();
     this.dataSource.paginator = this.paginator;
     this.obs = this.dataSource.connect();
    });

    this.getproducts();


  }

  getproducts() {
    this.myArray = [];
    this.afs.collection("petshop").get()
      .subscribe((ss) => {
        ss.docs.forEach((doc) => {
          let pet = doc.data() as PetShopResult;
          this.myArray.push(pet);
        });
      });
  }

  getData() {
    this.getPlaces(this.token).subscribe(x => {this.places = x.results; this.token = x.next_page_token;});
    this.filteredPlaces = this.places;
    return true;
  }

  applyFilter(filterValue: string) {
    if(filterValue == undefined || filterValue == null){
      this.filteredPlaces = this.places;
    }
    else
    this.filteredPlaces = this.places.filter(v => v.name.includes(filterValue) || v.formatted_address.includes(filterValue));
    this.dataSource = new MatTableDataSource<PlacesResult>(this.filteredPlaces);
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();

  }

  showMore() {
    this.getPlaces(this.token).subscribe(x => {
    this.places = x.results; this.token = x.next_page_token;
      this.filteredPlaces = this.filteredPlaces.concat(x.results);
      this.dataSource = new MatTableDataSource<PlacesResult>(this.filteredPlaces);
      this.changeDetectorRef.detectChanges();
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();
    });
  }


}
