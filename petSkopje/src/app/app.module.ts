import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './navigation/header/header.component';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule, MatPaginatorModule, MatProgressSpinnerModule, MatDialogModule, MAT_DIALOG_DATA, MatInputModule, MatFormFieldModule, MatCheckboxModule, MatSlideToggleModule, MatDatepickerModule, MatRadioModule, MatNativeDateModule, MatGridListModule, MatChipsModule, MatAutocompleteModule, MatButtonToggleModule, MatExpansionModule, MatMenuModule, MatProgressBarModule, MatRippleModule, MatSelectModule, MatSliderModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatTooltipModule, MatStepperModule } from '@angular/material';
import { VetsComponent } from './vets/vets.component';
import { ShopsComponent } from './shops/shops.component';
import { MypetComponent } from './mypet/mypet.component';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardComponent } from './common/card/card.component';
import { DialogDetailsComponent } from './dialog-details/dialog-details.component';
import { AppConfig } from './app.config';
import { AuthGuard } from './auth.guard';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AddPetDialogComponent } from './add-pet-dialog/add-pet-dialog.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';


export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}
const config =  {
  apiKey: "",
  authDomain: "petskopje.firebaseapp.com",
  projectId: "petskopje",
  storageBucket: "petskopje.appspot.com",
  messagingSenderId: "",
  appId: ""
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VetsComponent,
    ShopsComponent,
    MypetComponent,
    HomepageComponent,
    CardComponent,
    DialogDetailsComponent,
    AddPetDialogComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    AgmCoreModule.forRoot({
      apiKey: ""
    }),
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSidenavModule,NgbModule,
    MatFormFieldModule,
        MatInputModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatCardModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule.enablePersistence(),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatRadioModule,
    FormsModule,
    MatListModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatChipsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot([
      { path: '', component: HomepageComponent },
      { path: 'vets', component: VetsComponent },
      { path: 'shops', component: ShopsComponent },
      { path: 'myPet', component: MypetComponent,  canActivate: [AuthGuard] },
    ])
  ],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: {} },
    AppConfig,
  {
    provide: APP_INITIALIZER,
    useFactory: initializeApp,
    deps: [AppConfig], multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogDetailsComponent,
    AddPetDialogComponent
  ]
})
export class AppModule { }
