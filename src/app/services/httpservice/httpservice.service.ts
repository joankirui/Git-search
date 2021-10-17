import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  url = environment.url
  token = environment.api_key

  constructor(private http: HttpClient) { }


  getUser(userName: string){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.token,
      }),
    };

    return new Promise((resolve, reject) => {
      this.http
        .get<any>(this.url + `/users/${userName}`, httpOptions)
        .toPromise()
        .then(
          (result) => {
            resolve(result);
          },
          (error) => {
            console.log(error);
            reject();
          }
        );
    });
  }

}
