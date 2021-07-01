(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/add-pet-dialog/add-pet-dialog.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-pet-dialog/add-pet-dialog.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <h2>Внес на миленик </h2>\n    <hr>\n    <form #myForm=\"ngForm\">\n        <mat-label>Тип на животно</mat-label>\n        <br>\n        <mat-radio-group [(ngModel)]=\"pet.Type\" name=\"pet.Type\" required>\n            <mat-radio-button value=\"Мачка\">Мачка</mat-radio-button>\n            <mat-radio-button value=\"Куче\">Куче</mat-radio-button>\n            <mat-radio-button value=\"Папагал\">Папагал</mat-radio-button>\n            <mat-radio-button value=\"Морско прасе\">Морско прасе</mat-radio-button>\n        </mat-radio-group>\n        <br>\n        <mat-label>Име</mat-label>\n        <mat-form-field appearance=\"outline\">\n            <input matInput minlength=\"1\" placeholder=\"Име\" [(ngModel)]=\"pet.Name\" name=\"pet.Name\" required>\n        </mat-form-field>\n        <br>\n        <mat-label>Датум на раѓање</mat-label>\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n        <input matInput [matDatepicker]=\"picker\" [max]=\"maxDate\"  [(ngModel)]=\"birthDate\" name=\"birthDate\" required>\n\n        <br>\n        <mat-label>Пол</mat-label>\n        <mat-radio-group [(ngModel)]=\"pet.Gender\" name=\"pet.Gender\" required>\n            <mat-radio-button value=\"male\">Машко</mat-radio-button>\n            <mat-radio-button value=\"female\">Женско</mat-radio-button>\n        </mat-radio-group>\n\n        <div *ngIf=\"pet.Type && (pet.Type == 'Мачка' || pet.Type == 'Куче')\">\n            <mat-label>Раса</mat-label>\n            <mat-form-field appearance=\"outline\">\n                <input matInput minlength=\"1\" placeholder=\"Раса\" [(ngModel)]=\"pet.breed\" name=\"pet.breed\">\n            </mat-form-field>\n            <br>\n\n            <mat-label>Вакцина против беснило</mat-label>\n            <mat-checkbox [(ngModel)]=\"pet.Rabies\" name=\"pet.Rabies\"></mat-checkbox>\n            <br>\n            <div *ngIf=\"pet.Rabies\">\n\n                <mat-label>Датум на последна вакцина </mat-label>\n                <input matInput [matDatepicker]=\"picker\" [min]=\"birthDate\" [max]=\"maxDate\" [(ngModel)]=\"rabiesDate\" name=\"rabiesDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-datepicker #picker></mat-datepicker>\n                <br>\n            </div>\n            <mat-label>Вакцина против заразни паразитски болести</mat-label>\n            <mat-checkbox [(ngModel)]=\"pet.Parvo\" name=\"pet.Parvo\"></mat-checkbox>\n            <br>\n            <div *ngIf=\"pet.Parvo\">\n                <mat-label>Датум на последна вакцина </mat-label>\n                <input matInput [matDatepicker]=\"picker\" [min]=\"birthDate\" [max]=\"maxDate\"  [(ngModel)]=\"parvoDate\" name=\"parvoDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-datepicker #picker></mat-datepicker>\n                <br>\n            </div>\n            <mat-label>Датум на последно внатрешно прочистување </mat-label>\n            <input matInput [matDatepicker]=\"picker\" [min]=\"birthDate\" [max]=\"maxDate\" [(ngModel)]=\"parasitesDate\" name=\"parasitesDate\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n            <br>\n            <mat-label>Датум на ампула </mat-label>\n            <input matInput [matDatepicker]=\"picker1\" [min]=\"birthDate\" [max]=\"maxDate\" [(ngModel)]=\"ampuleDate\" name=\"ampuleDate\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n            <mat-datepicker #picker1></mat-datepicker>\n            <br>\n            <mat-label>Датум на последно капење/шишање </mat-label>\n            <input matInput [matDatepicker]=\"picker2\" [min]=\"birthDate\" [max]=\"maxDate\" [(ngModel)]=\"groomerDate\" name=\"groomerDate\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n            <mat-datepicker #picker2></mat-datepicker>\n            <br>\n        </div>\n        <br>\n    </form>\n    <button mat-raised-button color=\"primary\" type=\"submit\" (click)=\"savePet()\" [disabled]=\"!myForm.valid\" [mat-dialog-close]=\"myForm.valid\">Зачувај</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main>\n<router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/card/card.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/card/card.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-elevation-z4\" style=\"height: 100%;\">\n    <mat-card-header>\n      <mat-card-title>{{name}}</mat-card-title>\n    </mat-card-header>\n    <img mat-card-image>\n    <mat-card-content>\n      <img src = \"{{photourl}}\" width=\"200\" height=\"100\"/>\n      <p>\n        {{address}}\n      </p>\n    </mat-card-content>\n    <mat-card-actions>\n        <mat-chip-list>\n            <mat-chip color=\"primary\" selected><mat-icon>grade</mat-icon>  {{rating}}  </mat-chip>\n            <button mat-raised-button color=\"accent\" (click)=\"openDialog()\">Детали</button>\n                <button mat-fab color=\"warn\" *ngIf=\"showFavButton\" (click)=\"setVet()\">\n                  <mat-icon>favorite</mat-icon>\n                </button>\n          </mat-chip-list>\n    </mat-card-actions>\n  </mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dialog-details/dialog-details.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dialog-details/dialog-details.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"loading==false\"></div>\n<div *ngIf=\"loading==false\" class=\"dialog\">\n    <h1 color=\"primary\">\n        {{place.name}}\n    </h1>\n    <mat-dialog-content>\n        <hr>\n        <div>\n            <p><b> Галерија</b></p>\n            <mat-grid-list cols=\"4\">\n                <mat-grid-tile *ngIf=\"place.photos[0] != undefined\"><img src=\"{{getimg(place.photos[0]?.photo_reference)}}\"\n                        width=\"150\" height=\"100\" /></mat-grid-tile>\n                <mat-grid-tile *ngIf=\"place.photos[1] != undefined\"><img src=\"{{getimg(place.photos[1]?.photo_reference)}}\"\n                        width=\"150\" height=\"100\" /></mat-grid-tile>\n                <mat-grid-tile *ngIf=\"place.photos[2] != undefined\"><img src=\"{{getimg(place.photos[2]?.photo_reference)}}\"\n                        width=\"150\" height=\"100\" /></mat-grid-tile>\n                <mat-grid-tile *ngIf=\"place.photos[3] != undefined\"><img src=\"{{getimg(place.photos[3]?.photo_reference)}}\"\n                        width=\"150\" height=\"100\" /></mat-grid-tile>\n            </mat-grid-list>\n        </div>\n        <hr>\n\n        <div>\n            <p><b> Контакт</b></p>\n            <p>\n                <a href=\"{{'tel:'+place.formatted_phone_number}}\">\n                    <mat-icon>phone</mat-icon>{{place.formatted_phone_number}}\n                </a>\n            </p>\n            <p><a href=\"{{place.website}}\">\n                    <mat-icon>web</mat-icon>Веб страна\n                </a></p>\n            <p>\n                <mat-icon>house</mat-icon> {{place.formatted_address}}\n            </p>\n\n\n            <mat-accordion>\n\n                <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            Работно време\n                        </mat-panel-title>\n                        <mat-panel-description>\n                            {{place.opening_hours.open_now ? 'Отворено' : 'Затворено'}}\n                        </mat-panel-description>\n                    </mat-expansion-panel-header>\n                    <div *ngFor=\"let a of place.opening_hours.weekday_text\">\n                        <p>{{a}} </p>\n                    </div>\n                </mat-expansion-panel>\n            </mat-accordion>\n        </div>\n        <hr>\n\n        <div>\n            <agm-map [latitude]=\"place.geometry.location.lat\" [longitude]=\"place.geometry.location.lng\" [zoom]=\"15\">\n                <agm-marker [latitude]=\"place.geometry.location.lat\" [longitude]=\"place.geometry.location.lng\"\n                    [markerDraggable]=\"false\">\n                </agm-marker>\n            </agm-map>\n        </div>\n        <hr>\n\n    </mat-dialog-content>\n    <mat-dialog-actions>\n        <button mat-button mat-dialog-close mat-stroked-button color=\"primary\">Затвори</button>\n    </mat-dialog-actions>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/homepage/homepage.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/homepage/homepage.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"{{cols}}\" rowHeight=\"500px\" (window:resize)=\"onResize($event)\" [gutterSize]=\"'20px'\">\n    <mat-grid-tile colspan=\"{{cols}}\" style=\" background: #faf7f2; \" >\n        <div style=\"text-align: center\" >\n            <h1>PetSkopje</h1>\n            <p>Сѐ што ви треба за вашиот миленик!</p>\n            <img src='../../assets/img/home.jpg'>\n          \n        </div>\n    </mat-grid-tile>\n\n    <mat-grid-tile colspan=\"1\" >\n        <div style=\"text-align: center\">\n            <img src='../../assets/img/vet.jpg' height=\"50%\" width=\"50%\">\n            <h4>Најголемиот регистар на ветеринари и амбуланти за врвна нега на вашиот миленик</h4>\n            <a mat-raised-button color=\"primary\" href=\"vets\">Види повеќе</a>\n\n        </div>\n    </mat-grid-tile>\n\n    <mat-grid-tile colspan=\"1\">\n        <div style=\"text-align: center\">\n            <img src='../../assets/img/petsh.jpg' height=\"50%\" width=\"50%\">\n            <h4 height=\"30%\" width=\"30%\">Најдобрите производи во пет шоповите низ градот, достапни со само еден клик!</h4>\n            <a mat-raised-button color=\"primary\" href=\"shops\">Види повеќе</a>\n        </div>\n    </mat-grid-tile>\n\n\n    <mat-grid-tile colspan=\"{{cols}}\"  style=\" background: #faf7f2; \">\n        <div style=\"text-align: center;width:50%; font-size: larger\">\n            <img src='../../assets/img/lotdogs.png' width=\"80%\" height=\"80%\">\n            <p >Сите важни информации за вашите миленичиња на едно место. Добијте навремени известувања и бидете во тек со имунизацијата и прочистувањето на вашето куче или мачка. </p>\n\n        </div>\n\n    </mat-grid-tile>\n\n</mat-grid-list>\n<div style=\"text-align: center;color: antiquewhite; background: black; height: 50px!important; vertical-align: middle\">\n    <p >PetSkp 2021</p>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mypet/mypet.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mypet/mypet.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\n    <div *ngIf=\"auth.user$ | async as user\">\n        <h3>Добредојдовте</h3>\n\n        <h3>{{ user.name }} {{ user.surname }}</h3>\n        <h4>{{ user.email }} </h4>\n\n        <br>\n        <button (click)=\"auth.signOut()\" mat-raised-button color=\"accent\">Одјави се</button>\n        <br>\n        <br>\n        <br> <br>\n\n\n        <mat-slide-toggle [(ngModel)]=\"user.notifPet\">Известувања за миленик</mat-slide-toggle>\n        <br>\n\n        <br> <br>\n\n\n        <button mat-raised-button (click)=\"updateUser(user.notifPet, user.notifProd)\">Зачувај промени</button>\n    </div>\n</div>\n<div class=\"content\">\n    <button button=\"submit\" mat-raised-button color=\"primary\" (click)=\"openDialog()\">\n        <mat-icon>add</mat-icon> Додај миленик\n    </button>\n    <br>\n    <mat-grid-list cols=\"{{cols}}\" rowHeight=\"2:3\" (window:resize)=\"onResize($event)\" [gutterSize]=\"'20px'\">\n        <mat-grid-tile class=\"mat-elevation-z8\" *ngFor=\"let pet of myArray\" colspan=\"1\">\n            <div>\n                <div style=\"padding-left:5%; \">\n                    <h2>\n                        {{pet.Name}}<mat-icon>{{pet.Gender}} </mat-icon>\n                    </h2>\n                    <label>\n                        {{pet.Type}}\n                        <br>\n                        <mat-icon>cake</mat-icon>{{pet.Birthdate.toDate()| date:'dd/MM/yyyy'}}\n                        <span *ngIf=\"pet.Breed\"> -{{pet.Breed}} </span>\n                        -- {{getAge(pet.Birthdate.toDate()) }} години\n                        <span *ngIf=\"pet.Weight\">- {{pet.Weight}}kg</span>\n                    </label>\n                </div>\n\n                <div *ngIf=\"pet.Type == 'Куче' || pet.Type=='Мачка'\">\n\n                    <hr>\n\n                    <div class=\"block\">\n                        <img src=\"../../assets/img/vakcina.png\">\n                        <br>\n                        <mat-label class=\"sm-font\">Беснило</mat-label>\n                        <br>\n                        <div *ngIf=\"pet.Rabies\">\n                            <br>\n                            <mat-label>{{pet.DateRabies?.toDate().setYear(pet.DateRabies.toDate().getFullYear() + 1)|\n                                date:'dd/MM/yyyy'}}</mat-label>\n                        </div>\n\n                    </div>\n                    <div class=\"block\">\n                        <img src=\"../../assets/img/vakcina.png\">\n                        <br>\n                        <mat-label class=\"sm-font\">Останати вакцини</mat-label>\n                        <div *ngIf=\"pet.Parvo\">\n                            <mat-label>{{pet.DateParvo?.toDate().setYear(pet.DateParvo.toDate().getFullYear() + 1)|\n                                date:'dd/MM/yyyy'}}</mat-label>\n                        </div>\n\n                    </div>\n                    <div class=\"block\">\n                        <img src=\"../../assets/img/apce.png\">\n                        <br>\n                        <mat-label class=\"sm-font\">Внатрешни паразити</mat-label>\n                        <br>\n                        <mat-label>{{pet.ParasitesDate?.toDate().setMonth(pet.ParasitesDate.toDate().getMonth() + 3)|\n                            date:'dd/MM/yyyy'}}</mat-label>\n\n                    </div>\n                    <div class=\"block\">\n                        <img src=\"../../assets/img/paraziti.png\">\n                        <br>\n                        <mat-label class=\"sm-font\">Надворешни паразити</mat-label>\n                        <br>\n\n                        <mat-label>{{pet.AmpuleDate?.toDate().setMonth(pet.AmpuleDate.toDate().getMonth() + 3)|\n                            date:'dd/MM/yyyy'}}</mat-label>\n                        <br>\n                    </div>\n                    <div class=\"block\">\n                        <img src=\"../../assets/img/grooming.png\">\n                        <br>\n                        <mat-label class=\"sm-font\">Шишање/капење</mat-label>\n                        <br>\n                        <mat-label>{{pet.Groomer?.toDate().setMonth(pet.Groomer.toDate().getMonth() + 3)|\n                            date:'dd/MM/yyyy'}}</mat-label>\n                        <br>\n                    </div>\n                    <hr>\n\n                </div>\n\n                <div style=\"padding:5%\">\n                    <button mat-raised-button color=\"accent\" (click)=\"deletePet(pet.Uid)\">\n                        <mat-icon>delete</mat-icon>\n                        Избриши миленик\n                    </button>\n                    <button mat-raised-button (click)=\"sendNotification()\">Tест нотификација</button>\n\n                </div>\n\n            </div>\n        </mat-grid-tile>\n    </mat-grid-list>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navigation/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navigation/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n    <mat-sidenav #drawer class=\"sidenav\" fixedInViewport [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n        [mode]=\"(isHandset$ | async) ? 'over' : 'side'\" [opened]=\"(isHandset$ | async) === false\" [ngClass]=\"{hidden:!(isHandset$ | async)}\">\n        <mat-toolbar>Мени</mat-toolbar>\n        <mat-nav-list>\n            <a mat-list-item routerLink=\"vets\">Ветеринари</a>\n            <a mat-list-item routerLink=\"shops\">Пет шоп</a>\n            <span *ngIf=\"auth.user$ | async as user; else login\">\n                    <a mat-list-item  routerLink=\"myPet\"> <mat-icon>pets</mat-icon> {{user.name}}</a> \n                    <a  mat-raised-button color=\"primary\"  (click)=\"auth.signOut()\">Одјави се</a>\n            </span>\n                <ng-template #login>\n                    <a mat-raised-button color=\"primary\" (click)=\"auth.GoogleSignIn()\">Најави се</a>\n                </ng-template>\n        </mat-nav-list>\n    </mat-sidenav>\n    <mat-sidenav-content>\n        <mat-toolbar color=\"accent\">\n            <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\" *ngIf=\"isHandset$ | async\">\n                <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n            </button>\n            <a routerLink=\"\"> <img src=\"../../../assets/img/vet.png\" height=\"100\" width=\"100\">\n\n                PetSkp</a>\n            <span class=\"spacer\"></span>\n            <div [ngClass]=\"{hidden:(isHandset$ | async)}\">\n                <a mat-button routerLink=\"vets\">Ветеринари</a>\n                <a mat-button routerLink=\"shops\">Пет шоп</a>\n                <span *ngIf=\"auth.user$ | async as user; else login\">\n                    <a routerLink=\"myPet\"> <mat-icon>pets</mat-icon>{{user.name}}</a> \n                    <a mat-raised-button color=\"primary\" style=\"color:white!important\" (click)=\"auth.signOut()\">Одјави се</a>\n                </span>\n                <ng-template #login>\n                    <a mat-raised-button color=\"primary\" style=\"color:white!important\" (click)=\"auth.GoogleSignIn()\">Најави се</a>\n                </ng-template>\n            </div>\n        </mat-toolbar>\n    </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shops/shops.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shops/shops.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\n    <h2> Препорачани производи </h2>\n\n    <div class=\"container-fluid yellow-bg\">\n        <ngb-carousel >\n            <ng-template ngbSlide *ngFor=\"let prod of myArray\">\n                <div class=\"picsum-img-wrapper\">\n                    <img [src]=\"prod.img\" class=\"picPet\">\n                    <br>\n                    <h3>{{prod.name}}</h3>\n                    <p>{{prod.price ? prod.price + ' денари' : ''}}</p>\n                    <p>{{prod.petshop}}</p>\n                    <br>\n                </div>\n            </ng-template>\n        </ngb-carousel>\n\n    </div>\n    <div>\n        <br>\n        <br>\n        <h2> Пронајди пет шоп </h2>\n\n    </div>\n    <div>\n        <mat-card-header>\n            <mat-form-field class=\"example-full-width\">\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n            </mat-form-field>\n        </mat-card-header>\n        <div fxLayout=\"row wrap\" fxLayoutGap=\"16px grid\">\n            <div fxFlex=\"25%\" fxFlex.xs=\"100%\" fxFlex.sm=\"33%\" *ngFor=\"let x of obs | async\">\n                <card-component name=\"{{x.name}}\" address=\"{{x.formatted_address.replace('Северна Македонија','')}}\" detailsToken=\"{{x.place_id}}\"\n                    openNow=\"{{x.opening_hours?.open_now}}\" rating=\"{{x.rating}}\" imgRef=\"{{x.photos? x.photos[0].photo_reference : null}}\"></card-component>\n            </div>\n        </div>\n    </div>\n    <div style=\"text-align: center\" class=\"content\">\n            <button mat-raised-button color=\"accent\" (click)=\"showMore()\">Прикажи повеќе</button>\n        \n          </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vets/vets.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vets/vets.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" *ngIf=\"auth.user$ | async as user\">\n  <div *ngIf=\"vet != null\">\n    <h3>Мој ветеринар</h3>\n    <h4 color=\"primary\">\n      {{vet.name}}\n    </h4>\n    <hr>\n    <div>\n      <p><b> Контакт</b></p>\n      <p>\n        <a href=\"{{'tel:'+vet.formatted_phone_number}}\">\n          <mat-icon>phone</mat-icon>{{vet.formatted_phone_number}}\n        </a>\n      </p>\n      <p><a href=\"{{vet.website}}\">\n          <mat-icon>web</mat-icon>Веб страна\n        </a></p>\n      <p>\n        <mat-icon>house</mat-icon> {{vet.formatted_address}}\n      </p>\n      <mat-accordion>\n\n        <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Работно време\n            </mat-panel-title>\n            <mat-panel-description>\n              {{vet.opening_hours.open_now ? 'Отворено' : 'Затворено'}}\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <div *ngFor=\"let a of vet.opening_hours.weekday_text\">\n            <p>{{a}} </p>\n          </div>\n        </mat-expansion-panel>\n      </mat-accordion>\n    </div>\n    <hr>\n  </div>\n</div> \n\n<div class=\"content\">\n  <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"15\">\n    <agm-marker *ngFor=\"let x of obs | async\" [latitude]=\"x.geometry.location.lat\" [longitude]=\"x.geometry.location.lng\"\n      [markerDraggable]=\"false\">\n    </agm-marker>\n  </agm-map>\n  <hr>\n  <mat-card-header>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n  </mat-card-header>\n  <div fxLayout=\"row wrap\" fxLayoutGap=\"16px grid\">\n    <div fxFlex=\"25%\" fxFlex.xs=\"100%\" fxFlex.sm=\"33%\" *ngFor=\"let x of obs | async\">\n      <card-component name=\"{{x.name}}\" address=\"{{x.formatted_address.replace('Северна Македонија','')}}\" detailsToken=\"{{x.place_id}}\"\n        rating=\"{{x.rating}}\" imgRef=\"{{x.photos? x.photos[0].photo_reference : null}}\" showFavButton=\"showLikeBtn\"></card-component>\n    </div>\n  </div>\n  <div style=\"text-align: center\" class=\"content\">\n    <button mat-raised-button color=\"accent\" (click)=\"showMore()\">Прикажи повеќе</button>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/add-pet-dialog/add-pet-dialog.component.css":
/*!*************************************************************!*\
  !*** ./src/app/add-pet-dialog/add-pet-dialog.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    padding: 5%;\r\n}\r\n\r\nmat-label{\r\n    font-weight: bold;\r\n    margin-right: 16px;\r\n}\r\n\r\n.mat-radio-button ~ .mat-radio-button {\r\n    margin-left: 16px;\r\n  }\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXBldC1kaWFsb2cvYWRkLXBldC1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hZGQtcGV0LWRpYWxvZy9hZGQtcGV0LWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNSU7XHJcbn1cclxuXHJcbm1hdC1sYWJlbHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG4ubWF0LXJhZGlvLWJ1dHRvbiB+IC5tYXQtcmFkaW8tYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gIH1cclxuICBcclxuIl19 */"

/***/ }),

/***/ "./src/app/add-pet-dialog/add-pet-dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/add-pet-dialog/add-pet-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: AddPetDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPetDialogComponent", function() { return AddPetDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let AddPetDialogComponent = class AddPetDialogComponent {
    constructor(data, afs, auth) {
        this.afs = afs;
        this.auth = auth;
        this.pet = {
            Breed: '',
            Gender: '',
            Name: '',
            Type: '',
            Userid: '',
            Birthdate: new Date()
        };
        this.maxDate = new Date();
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
        });
    }
};
AddPetDialogComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
AddPetDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-pet-dialog',
        template: __webpack_require__(/*! raw-loader!./add-pet-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/add-pet-dialog/add-pet-dialog.component.html"),
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
        styles: [__webpack_require__(/*! ./add-pet-dialog.component.css */ "./src/app/add-pet-dialog/add-pet-dialog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], AddPetDialogComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-content: center;\r\n    align-self: center;\r\n    align-items: center;\r\n    margin: 50%;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 50%;\r\n  }\r\n  \r\n  .content {\r\n    padding: 16px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'petSkopje';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.config.ts":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

var AppConfig_1;


let AppConfig = AppConfig_1 = class AppConfig {
    constructor(http) {
        this.http = http;
    }
    load() {
        const jsonFile = `assets/config.json`;
        return new Promise((resolve, reject) => {
            this.http.get(jsonFile).toPromise().then((response) => {
                AppConfig_1.settings = response;
                resolve();
            }).catch((response) => {
                reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
            });
        });
    }
};
AppConfig.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AppConfig = AppConfig_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AppConfig);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: initializeApp, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeApp", function() { return initializeApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navigation/header/header.component */ "./src/app/navigation/header/header.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _vets_vets_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vets/vets.component */ "./src/app/vets/vets.component.ts");
/* harmony import */ var _shops_shops_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shops/shops.component */ "./src/app/shops/shops.component.ts");
/* harmony import */ var _mypet_mypet_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mypet/mypet.component */ "./src/app/mypet/mypet.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _common_card_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./common/card/card.component */ "./src/app/common/card/card.component.ts");
/* harmony import */ var _dialog_details_dialog_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dialog-details/dialog-details.component */ "./src/app/dialog-details/dialog-details.component.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _add_pet_dialog_add_pet_dialog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./add-pet-dialog/add-pet-dialog.component */ "./src/app/add-pet-dialog/add-pet-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");





























function initializeApp(appConfig) {
    return () => appConfig.load();
}
const config = {
    apiKey: "",
    authDomain: "petskopje.firebaseapp.com",
    projectId: "petskopje",
    storageBucket: "petskopje.appspot.com",
    messagingSenderId: "",
    appId: ""
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
            _vets_vets_component__WEBPACK_IMPORTED_MODULE_11__["VetsComponent"],
            _shops_shops_component__WEBPACK_IMPORTED_MODULE_12__["ShopsComponent"],
            _mypet_mypet_component__WEBPACK_IMPORTED_MODULE_13__["MypetComponent"],
            _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_15__["HomepageComponent"],
            _common_card_card_component__WEBPACK_IMPORTED_MODULE_18__["CardComponent"],
            _dialog_details_dialog_details_component__WEBPACK_IMPORTED_MODULE_19__["DialogDetailsComponent"],
            _add_pet_dialog_add_pet_dialog_component__WEBPACK_IMPORTED_MODULE_25__["AddPetDialogComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_28__["AgmCoreModule"].forRoot({
                apiKey: ""
            }),
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__["NgbModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__["LayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_22__["AngularFireModule"].initializeApp(config),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__["AngularFirestoreModule"].enablePersistence(),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_24__["AngularFireAuthModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production }),
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot([
                { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_15__["HomepageComponent"] },
                { path: 'vets', component: _vets_vets_component__WEBPACK_IMPORTED_MODULE_11__["VetsComponent"] },
                { path: 'shops', component: _shops_shops_component__WEBPACK_IMPORTED_MODULE_12__["ShopsComponent"] },
                { path: 'myPet', component: _mypet_mypet_component__WEBPACK_IMPORTED_MODULE_13__["MypetComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]] },
            ])
        ],
        providers: [{ provide: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DATA"], useValue: {} },
            _app_config__WEBPACK_IMPORTED_MODULE_20__["AppConfig"],
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                useFactory: initializeApp,
                deps: [_app_config__WEBPACK_IMPORTED_MODULE_20__["AppConfig"]], multi: true
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        entryComponents: [
            _dialog_details_dialog_details_component__WEBPACK_IMPORTED_MODULE_19__["DialogDetailsComponent"],
            _add_pet_dialog_add_pet_dialog_component__WEBPACK_IMPORTED_MODULE_25__["AddPetDialogComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");





let AuthGuard = class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(next, state) {
        return this.auth.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(user => !!user), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(loggedIn => {
            if (!loggedIn) {
                console.log('access denied');
                this.router.navigate(['/login']);
            }
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);








let AuthService = class AuthService {
    constructor(afAuth, afs, router) {
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        this.user$ = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(user => {
            if (user) {
                this.userUid = user.uid;
                return this.afs.doc(`users/${user.uid}`).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }
        }));
    }
    GoogleSignIn() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const provider = new firebase__WEBPACK_IMPORTED_MODULE_7__["auth"].GoogleAuthProvider();
            const credential = yield this.afAuth.auth.signInWithPopup(provider);
            return this.updateUserData(credential.user);
        });
    }
    updateUserData(user) {
        const userRef = this.afs.doc(`users/${user.uid}`);
        const data = {
            uid: user.uid,
            email: user.email
        };
        return userRef.set(data, { merge: true });
    }
    updateCurrentUser(notifPet, notifProd, vetUid) {
        const userRef = this.afs.doc(`users/${this.userUid}`);
        const data = {
            uid: this.userUid,
        };
        if (notifPet != null && notifProd != null) {
            data.notifPet = notifPet;
            data.notifProd = notifProd;
        }
        if (vetUid) {
            data.vetUid = vetUid;
        }
        return userRef.set(data, { merge: true });
    }
    signOut() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.afAuth.auth.signOut();
            this.router.navigate(['/']);
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthService);



/***/ }),

/***/ "./src/app/common/card/card.component.css":
/*!************************************************!*\
  !*** ./src/app/common/card/card.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    padding: 16px;\r\n}\r\n\r\n.content > mat-card {\r\n    width: 200px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4uY29udGVudCA+IG1hdC1jYXJkIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/common/card/card.component.ts":
/*!***********************************************!*\
  !*** ./src/app/common/card/card.component.ts ***!
  \***********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_dialog_details_dialog_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dialog-details/dialog-details.component */ "./src/app/dialog-details/dialog-details.component.ts");
/* harmony import */ var src_app_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.config */ "./src/app/app.config.ts");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");






let CardComponent = class CardComponent {
    constructor(dialog, auth) {
        this.dialog = dialog;
        this.auth = auth;
        this.showFavButton = false;
        this.apiKey = src_app_app_config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"].settings.apiKey;
    }
    getimg() {
        return "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + this.imgRef + "&key=" + this.apiKey;
    }
    openDialog() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.data = {
            detailsToken: this.detailsToken,
        };
        this.dialog.open(src_app_dialog_details_dialog_details_component__WEBPACK_IMPORTED_MODULE_3__["DialogDetailsComponent"], { data: dialogConfig });
    }
    ngOnInit() {
        this.photourl = this.getimg();
    }
    setVet() {
        if (confirm("Дали сте сигурни дека сакате да го поставите матичниот ветеринар?")) {
            this.auth.updateCurrentUser(null, null, this.detailsToken);
        }
    }
};
CardComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "address", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "imgRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "openNow", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "rating", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "detailsToken", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "showFavButton", void 0);
CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'card-component',
        template: __webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/card/card.component.html"),
        styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/common/card/card.component.css")]
    })
], CardComponent);



/***/ }),

/***/ "./src/app/dialog-details/dialog-details.component.css":
/*!*************************************************************!*\
  !*** ./src/app/dialog-details/dialog-details.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map { height: 200px; width: 700px }\r\n\r\n@media only screen and (max-width: 600px) {\r\n    agm-map { height: 200px; width: 400px }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nLWRldGFpbHMvZGlhbG9nLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFVLGFBQWEsRUFBRSxhQUFhOztBQUV0QztJQUNJLFVBQVUsYUFBYSxFQUFFLGFBQWE7QUFDMUMiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2ctZGV0YWlscy9kaWFsb2ctZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7IGhlaWdodDogMjAwcHg7IHdpZHRoOiA3MDBweCB9XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBhZ20tbWFwIHsgaGVpZ2h0OiAyMDBweDsgd2lkdGg6IDQwMHB4IH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/dialog-details/dialog-details.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dialog-details/dialog-details.component.ts ***!
  \************************************************************/
/*! exports provided: DialogDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDetailsComponent", function() { return DialogDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");





let DialogDetailsComponent = class DialogDetailsComponent {
    constructor(httpClient, data) {
        this.httpClient = httpClient;
        this.apiKey = _app_config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"].settings.apiKey;
        this.lat = 21.3069;
        this.lng = -157.8583;
        this.mapType = "satellite";
        this.detailsToken = data.data.detailsToken;
    }
    getPlaces() {
        const self = this;
        let url;
        url = "https://maps.googleapis.com/maps/api/place/details/json?place_id=" + this.detailsToken + "&key=" + this.apiKey + "&language=mk";
        return self.httpClient.get(url);
    }
    ngOnInit() {
        this.loading = true;
        this.getPlaces().subscribe(x => { this.place = x.result; this.loading = false; });
    }
    getimg(imgRef) {
        return "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + imgRef + "&key=" + this.apiKey;
    }
};
DialogDetailsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
DialogDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-details',
        template: __webpack_require__(/*! raw-loader!./dialog-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/dialog-details/dialog-details.component.html"),
        styles: [__webpack_require__(/*! ./dialog-details.component.css */ "./src/app/dialog-details/dialog-details.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], DialogDetailsComponent);



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  .content {\r\n    padding: 5%;\r\n    width: 50%;\r\n    display: inline-grid;\r\n    text-align: center\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n    mat-grid-list{\r\n      width: 100%;\r\n    }\r\n    .content {\r\n      padding: 5%;\r\n      width: 100%;\r\n  \r\n      text-align: center\r\n  }\r\n  \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0k7TUFDRSxXQUFXO0lBQ2I7SUFDQTtNQUNFLFdBQVc7TUFDWCxXQUFXOztNQUVYO0VBQ0o7O0VBRUEiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgbWF0LWdyaWQtbGlzdHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICBcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgfVxyXG4gIFxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomepageComponent = class HomepageComponent {
    constructor() {
        this.columns = 4;
    }
    ngOnInit() {
        this.cols = (window.innerWidth <= 1200) ? 1 : 2;
    }
    onResize(event) {
        this.cols = (event.target.innerWidth <= 1200) ? 1 : 2;
    }
};
HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homepage',
        template: __webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/index.js!./src/app/homepage/homepage.component.html"),
        styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
    })
], HomepageComponent);



/***/ }),

/***/ "./src/app/mypet/mypet.component.css":
/*!*******************************************!*\
  !*** ./src/app/mypet/mypet.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  .content {\r\n    padding: 5%;\r\n    width: 50%;\r\n    display: inline-grid;\r\n    text-align: center\r\n}\r\n\r\nmat-grid-list{\r\n  margin-top:5%\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n  mat-grid-list{\r\n    width: 100%;\r\n  }\r\n  .content {\r\n    padding: 5%;\r\n    width: 100%;\r\n\r\n    text-align: center\r\n}\r\n\r\n}\r\n\r\nimg {\r\n  border-radius: 50%;\r\n  width: 70px;\r\n  height: 70px;\r\n}\r\n\r\n.block{\r\n  vertical-align: top;\r\n  display: inline-block;\r\n  text-align: center;\r\n  width: 120px;\r\n  padding: 6px;\r\n}\r\n\r\n.sm-font{\r\n  font-size: x-small\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlwZXQvbXlwZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQjtBQUNKOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsV0FBVzs7SUFFWDtBQUNKOztBQUVBOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBR0E7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0U7QUFDRiIsImZpbGUiOiJzcmMvYXBwL215cGV0L215cGV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG5tYXQtZ3JpZC1saXN0e1xyXG4gIG1hcmdpbi10b3A6NSVcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIG1hdC1ncmlkLWxpc3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxufVxyXG5cclxuaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG5cclxuLmJsb2Nre1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgcGFkZGluZzogNnB4O1xyXG59XHJcblxyXG4uc20tZm9udHtcclxuICBmb250LXNpemU6IHgtc21hbGxcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/mypet/mypet.component.ts":
/*!******************************************!*\
  !*** ./src/app/mypet/mypet.component.ts ***!
  \******************************************/
/*! exports provided: MypetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MypetComponent", function() { return MypetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _add_pet_dialog_add_pet_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-pet-dialog/add-pet-dialog.component */ "./src/app/add-pet-dialog/add-pet-dialog.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../notification.service */ "./src/app/notification.service.ts");








let MypetComponent = class MypetComponent {
    constructor(afs, swPush, service, dialog, auth) {
        this.afs = afs;
        this.swPush = swPush;
        this.service = service;
        this.dialog = dialog;
        this.auth = auth;
        this.myArray = [];
        this.isChecked = true;
        this.notifPet = true;
        this.notifProd = true;
        this.vapidKeys = `BNF5hmxX5kcE-xV0Ec05AtWmNXtJyLng6cHVL7n0SXB11qEEVIUuddkVNe4HZ7TeTDs51K-Kp26GpFEIzA5sdr8`;
    }
    updateUser(np, npr) {
        this.auth.updateCurrentUser(np, npr);
        this.notifPet = np;
        this.notifProd = npr;
    }
    ngOnInit() {
        this.cols = (window.innerWidth <= 1200) ? 1 : 2;
        this.getPets();
    }
    getPets() {
        this.myArray = [];
        this.afs.collection("pets", ref => ref.where("Userid", "==", this.auth.userUid)).get()
            .subscribe((ss) => {
            ss.docs.forEach((doc) => {
                let pet = doc.data();
                pet.Uid = doc.id;
                this.myArray.push(pet);
            });
        });
    }
    openDialog() {
        this.dialog.open(_add_pet_dialog_add_pet_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AddPetDialogComponent"]).afterClosed()
            .subscribe(() => this.getPets());
    }
    deletePet(uid) {
        if (confirm("Дали сте сигурни дека сакате да го избришете миленичето?")) {
            this.afs.collection("pets").doc(uid).delete().then(() => {
                this.ngOnInit();
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
        }
    }
    getAge(birthdate) {
        let timeDiff = Math.abs(Date.now() - birthdate.getTime());
        let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
        return age;
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
};
MypetComponent.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["SwPush"] },
    { type: _notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
MypetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mypet',
        template: __webpack_require__(/*! raw-loader!./mypet.component.html */ "./node_modules/raw-loader/index.js!./src/app/mypet/mypet.component.html"),
        styles: [__webpack_require__(/*! ./mypet.component.css */ "./src/app/mypet/mypet.component.css")]
    })
], MypetComponent);



/***/ }),

/***/ "./src/app/navigation/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/navigation/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n  \r\n  .hidden{\r\n    display: none;\r\n  }\r\n  \r\n  .spacer{\r\n    flex: 1 1 auto;\r\n  }\r\n  \r\n  mat-toolbar a{\r\n    display: inline-block;\r\n    margin: 0 10px;\r\n    color:#2b4219;\r\n    text-decoration: none\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUNBO0lBQ0UsY0FBYztFQUNoQjs7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsYUFBYTtJQUNiO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmhpZGRlbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5zcGFjZXJ7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbiAgbWF0LXRvb2xiYXIgYXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgY29sb3I6IzJiNDIxOTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/navigation/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/navigation/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");





let HeaderComponent = class HeaderComponent {
    constructor(breakpointObserver, auth) {
        this.breakpointObserver = breakpointObserver;
        this.auth = auth;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => result.matches));
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] },
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/navigation/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/navigation/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/notification.service.ts":
/*!*****************************************!*\
  !*** ./src/app/notification.service.ts ***!
  \*****************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let NotificationService = class NotificationService {
    constructor(_http) {
        this._http = _http;
        this.notificationURL = 'http://localhost:3000/subscribe';
    }
    postSubscription(sub) {
        return this._http.post(this.notificationURL, sub).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handlError));
    }
    handlError(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.error.message);
    }
};
NotificationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NotificationService);



/***/ }),

/***/ "./src/app/shops/shops.component.css":
/*!*******************************************!*\
  !*** ./src/app/shops/shops.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    padding: 5%;\r\n}\r\n\r\n.carousel-caption{\r\n    color: black!important\r\n}\r\n\r\n.yellow-bg{\r\n    background-color: #d6d09a\r\n}\r\n\r\n.picsum-img-wrapper{\r\n    text-align: center\r\n}\r\n\r\n.picPet{\r\n    max-width: 30%;\r\n    max-height: 30%;\r\n    padding: 2%\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHMvc2hvcHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2Y7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Nob3BzL3Nob3BzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxuLmNhcm91c2VsLWNhcHRpb257XHJcbiAgICBjb2xvcjogYmxhY2shaW1wb3J0YW50XHJcbn1cclxuXHJcbi55ZWxsb3ctYmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkMDlhXHJcbn1cclxuXHJcbi5waWNzdW0taW1nLXdyYXBwZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG4ucGljUGV0e1xyXG4gICAgbWF4LXdpZHRoOiAzMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMCU7XHJcbiAgICBwYWRkaW5nOiAyJVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/shops/shops.component.ts":
/*!******************************************!*\
  !*** ./src/app/shops/shops.component.ts ***!
  \******************************************/
/*! exports provided: ShopsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopsComponent", function() { return ShopsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__);






let ShopsComponent = class ShopsComponent {
    constructor(httpClient, changeDetectorRef, afs) {
        this.httpClient = httpClient;
        this.changeDetectorRef = changeDetectorRef;
        this.afs = afs;
        this.apiKey = _app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].settings.apiKey;
    }
    getPlaces(token) {
        const self = this;
        let url;
        if (token != null || token != undefined) {
            url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?pagetoken=&" + token + "key=" + this.apiKey + "language=mk";
        }
        else {
            url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=petshops+in+skopje&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=" + this.apiKey + "&language=mk";
        }
        return self.httpClient.get(url);
    }
    ngOnInit() {
        this.getPlaces().subscribe(x => {
            this.places = x.results;
            this.token = x.next_page_token;
            this.filteredPlaces = x.results;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.filteredPlaces);
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
                let pet = doc.data();
                this.myArray.push(pet);
            });
        });
    }
    getData() {
        this.getPlaces(this.token).subscribe(x => { this.places = x.results; this.token = x.next_page_token; });
        this.filteredPlaces = this.places;
        return true;
    }
    applyFilter(filterValue) {
        if (filterValue == undefined || filterValue == null) {
            this.filteredPlaces = this.places;
        }
        else
            this.filteredPlaces = this.places.filter(v => v.name.includes(filterValue) || v.formatted_address.includes(filterValue));
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.filteredPlaces);
        this.changeDetectorRef.detectChanges();
        this.dataSource.paginator = this.paginator;
        this.obs = this.dataSource.connect();
    }
    showMore() {
        this.getPlaces(this.token).subscribe(x => {
            this.places = x.results;
            this.token = x.next_page_token;
            this.filteredPlaces = this.filteredPlaces.concat(x.results);
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.filteredPlaces);
            this.changeDetectorRef.detectChanges();
            this.dataSource.paginator = this.paginator;
            this.obs = this.dataSource.connect();
        });
    }
};
ShopsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: false })
], ShopsComponent.prototype, "paginator", void 0);
ShopsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shops',
        template: __webpack_require__(/*! raw-loader!./shops.component.html */ "./node_modules/raw-loader/index.js!./src/app/shops/shops.component.html"),
        styles: [__webpack_require__(/*! ./shops.component.css */ "./src/app/shops/shops.component.css")]
    })
], ShopsComponent);



/***/ }),

/***/ "./src/app/vets/vets.component.css":
/*!*****************************************!*\
  !*** ./src/app/vets/vets.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    padding: 5%;\r\n}\r\n\r\nagm-map { height: 300px; width: 100% }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmV0cy92ZXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUEsVUFBVSxhQUFhLEVBQUUsWUFBWSIsImZpbGUiOiJzcmMvYXBwL3ZldHMvdmV0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNSU7XHJcbn1cclxuXHJcbmFnbS1tYXAgeyBoZWlnaHQ6IDMwMHB4OyB3aWR0aDogMTAwJSB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/vets/vets.component.ts":
/*!****************************************!*\
  !*** ./src/app/vets/vets.component.ts ***!
  \****************************************/
/*! exports provided: VetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VetsComponent", function() { return VetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");






let VetsComponent = class VetsComponent {
    constructor(httpClient, changeDetectorRef, auth) {
        this.httpClient = httpClient;
        this.changeDetectorRef = changeDetectorRef;
        this.auth = auth;
        this.apiKey = _app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].settings.apiKey;
        this.vet = null;
        this.showLikeBtn = true;
    }
    getPlaces(token) {
        const self = this;
        let url;
        if (token != null || token != undefined) {
            url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=veterinarians+in+skopje&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=" + this.apiKey + "&pagetoken=" + this.token;
        }
        else {
            url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=veterinarians+in+skopje&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=" + this.apiKey + "&language=mk";
        }
        return self.httpClient.get(url);
    }
    ngOnInit() {
        this.getCurrentLocation();
        this.getMatVet();
        this.getPlaces().subscribe(x => {
            this.places = x.results;
            this.token = x.next_page_token;
            this.filteredPlaces = x.results;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.filteredPlaces);
            this.changeDetectorRef.detectChanges();
            this.dataSource.paginator = this.paginator;
            this.obs = this.dataSource.connect();
        });
    }
    showMore() {
        this.getPlaces(this.token).subscribe(x => {
            this.places = x.results;
            this.token = x.next_page_token;
            this.filteredPlaces = this.filteredPlaces.concat(x.results);
            console.log(x.results);
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.filteredPlaces);
            this.changeDetectorRef.detectChanges();
            this.dataSource.paginator = this.paginator;
            this.obs = this.dataSource.connect();
        });
    }
    applyFilter(filterValue) {
        if (filterValue == undefined || filterValue == null) {
            this.filteredPlaces = this.places;
        }
        else
            this.filteredPlaces = this.places.filter(v => v.name.includes(filterValue) || v.formatted_address.includes(filterValue));
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.filteredPlaces);
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
        let user;
        this.auth.user$.subscribe((x) => {
            user = x;
            this.getVet(user.vetUid).subscribe(x => { this.vet = x.result; this.showLikeBtn = false; }, () => { return false; });
        });
    }
    getVet(vetUid) {
        const self = this;
        let url;
        url = "https://maps.googleapis.com/maps/api/place/details/json?place_id=" + vetUid + "&key=" + this.apiKey + "&language=mk";
        return self.httpClient.get(url);
    }
};
VetsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: false })
], VetsComponent.prototype, "paginator", void 0);
VetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vets',
        template: __webpack_require__(/*! raw-loader!./vets.component.html */ "./node_modules/raw-loader/index.js!./src/app/vets/vets.component.html"),
        styles: [__webpack_require__(/*! ./vets.component.css */ "./src/app/vets/vets.component.css")]
    })
], VetsComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: '/app/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jana_\petSkopje\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map