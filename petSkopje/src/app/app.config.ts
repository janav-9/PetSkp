import { HttpClient } from '@angular/common/http';
import { IConfig } from './models';
import { Injectable } from '@angular/core';
@Injectable()

export class AppConfig {
    static settings: IConfig;
    constructor(private http: HttpClient) {}
    load() {
        const jsonFile = `assets/config.json`;
        return new Promise<void>((resolve, reject) => {
            this.http.get(jsonFile).toPromise().then((response : IConfig) => {
               AppConfig.settings = <IConfig>response;
               resolve();
            }).catch((response: any) => {
               reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
            });
        });
    }
}