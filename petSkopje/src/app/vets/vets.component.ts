import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PlacesResponse, PlacesResult, PlacesDetailsResponse, User } from '../models';
import { AppConfig } from '../app.config';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-vets',
  templateUrl: './vets.component.html',
  styleUrls: ['./vets.component.css']
})
export class VetsComponent implements OnInit {

  constructor(private httpClient: HttpClient, private changeDetectorRef: ChangeDetectorRef, public auth: AuthService) { }
  public places: PlacesResult[];
  public token: string;
  protected apiKey = AppConfig.settings.apiKey;
  public filteredPlaces: PlacesResult[];
  dataSource: MatTableDataSource<PlacesResult>;
  obs: Observable<any>;
  lat: number;
  vet: PlacesResult = null;
  showLikeBtn: boolean = true;

  lng: number;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;


  public getPlaces(token?: string): Observable<PlacesResponse> {
    const self = this;
    let url: string;
    if (token != null || token != undefined) {
      url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=veterinarians+in+skopje&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=" + this.apiKey + "&pagetoken=" + this.token;
    }
    else {
      url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=veterinarians+in+skopje&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=" + this.apiKey + "&language=mk";
    }
    return self.httpClient.get<PlacesResponse>(url);
  }

  ngOnInit() {
    this.getCurrentLocation();
    this.getMatVet();

    this.getPlaces().subscribe(x => {
      this.places = x.results; this.token = x.next_page_token;
      this.filteredPlaces = x.results;
      this.dataSource = new MatTableDataSource<PlacesResult>(this.filteredPlaces);
      this.changeDetectorRef.detectChanges();
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();
    });

  }

  showMore() {
    this.getPlaces(this.token).subscribe(x => {
      this.places = x.results; this.token = x.next_page_token;
      this.filteredPlaces = this.filteredPlaces.concat(x.results);
      console.log(x.results)
      this.dataSource = new MatTableDataSource<PlacesResult>(this.filteredPlaces);
      this.changeDetectorRef.detectChanges();
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();
    });
  }


  applyFilter(filterValue: string) {
    if (filterValue == undefined || filterValue == null) {
      this.filteredPlaces = this.places;
    }
    else
      this.filteredPlaces = this.places.filter(v => v.name.includes(filterValue) || v.formatted_address.includes(filterValue));
    this.dataSource = new MatTableDataSource<PlacesResult>(this.filteredPlaces);
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();

  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {

        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
    else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  getMatVet() {

    let user: User;
    this.auth.user$.subscribe((x) => {
      user = x;
      this.getVet(user.vetUid).subscribe(x => { this.vet = x.result; this.showLikeBtn = false }, () => { return false });
    });


  }

  public getVet(vetUid: string): Observable<PlacesDetailsResponse> {
    const self = this;
    let url: string;
    url = "https://maps.googleapis.com/maps/api/place/details/json?place_id=" + vetUid + "&key=" + this.apiKey + "&language=mk";
    return self.httpClient.get<PlacesDetailsResponse>(url);
  }
}
