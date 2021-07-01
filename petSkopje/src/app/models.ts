export interface PlacesResponse {
    results: PlacesResult[],
    next_page_token?:string
}

export interface PlacesResult {
    business_status?:string,
    formatted_address: string,
    formatted_phone_number: string,c
    name: string,
    photos?:PlacesPhotos[],
    international_phone_number?:string;
    rating?:number,
    website?:string,
    place_id?:string,
    opening_hours?:OpenHours
    geometry?: Geometry
}
export interface Geometry{
    location: GeoLocation
}

export interface GeoLocation{
    lat: number;
    lng: number
}
export interface PetShopResult{
    name: string,
    img: string,
    price: string,
    petshop: string
}

export interface PlacesPhotos{
    photo_reference:string
}
export interface PlacesDetailsResponse {
    result: PlacesResult
}
export interface OpenHours{
    open_now: boolean,
    weekday_text: string[]
}

export interface IConfig{
    apiKey: string
}

export interface User{
   uid: string;
   email?: string;
   name?: string;
   surname?: string;
   type?: string; 
   notifPet?: boolean;
   notifProd?: boolean;
   vetUid?:string
}

export interface Pet{
    Birthdate?: Date;
    Uid?: string;
    Breed?: string;
    DateParvo?: Date;
    DateRabies?: Date;
    Gender: string;
    Name: string;
    Neutered?: boolean;
    Cip?: boolean;
    ParasitesDate?: Date;
    AmpuleDate?:Date;
    Groomer?:Date;

    Parvo?: true;
    Rabies?: true;
    Weight?: number;
    Type: string;
    Userid: string;
    Img?: string;
}