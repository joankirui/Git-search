import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/user';
import { Repo } from 'src/app/repo';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  url = environment.url
  token = environment.api_key
  user!: User;
  repo!: Repo;

  constructor(private http: HttpClient) { 
    this.user = new User("", 0,0,"","","");
    this.repo = new Repo("","","");
  }


  getUser(userName: string){
    interface Response {
      name: string;
      bio:string;
      followers:number;
      following:number;
      avatar_url:string;
      login:string;
    }
  
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.token,
      }),
    };

    return new Promise((resolve, reject) => {
      this.http
        .get<Response>(this.url + `/users/${userName}`, httpOptions)
        .toPromise()
        .then(
          (result) => {
            this.user = result;
             resolve(result);
          },
          (error) => {
            console.log(error);
            reject();
          }
        );
    });
  }
  getRepo(userName:string){
    interface Repository {
      name: string;
      description:string;
      language:string;
    }

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.token,
      }),
    };

    return new Promise((resolve, reject) => {
      this.http
        .get<Repository>(this.url + `/users/${userName}/repos`, httpOptions)
        .toPromise()
        .then(
          (result) => {
            this.repo = result;
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
