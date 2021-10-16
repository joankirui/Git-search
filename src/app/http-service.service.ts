import { Injectable } from '@angular/core';
import { Repo } from './repo';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { resolve } from 'path';
import { rejects } from 'assert';
import { error } from 'console';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  myUser:User [] =[];
  myRepos:Repo [] = [];

  url = 'https://api.github.com/users/';
  token = '?access_token='+environment.apiUrl;

  constructor(private http:HttpClient) { }
  joan(userName:string){
    interface data {
      name:string;
      followers_url:string;
      following_url:string;
      bio:string;
    }
    let promise = new Promise ((resolve, reject)=>{
      this.myUser = [];
      this.http.get<data>(this.url+userName+this.token).toPromise().then(
        (result)=>{
          this.myUser.push(result);
          resolve()
        },
        (error)=>{
          reject();
        })
    })
    return promise;
  }
  joanRepo(userName:String){
    interface repoData {
      name: string;
      description: string;
      language: string;
    }
    let promise = new Promise ((resolve,reject)=>{
      this.myRepos = [];
      this.http.get<repoData>(this.url+userName+"/repos?"+this.token).toPromise().then(
        (result)=>{
          this.myRepos.push(result);
          resolve()
        },
        (error)=>{
          reject();
        })
    })
    return promise;
  }
}
