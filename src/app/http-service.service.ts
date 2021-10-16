import { Injectable } from '@angular/core';
import { Repo } from './repo';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  myUser:User [] =[];
  myRepos:Repo [] = [];

  constructor() { }
}
