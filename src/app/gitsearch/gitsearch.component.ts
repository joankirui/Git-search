import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../services/httpservice/httpservice.service';
import { User } from 'src/app/user';
import { Repo } from 'src/app/repo';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {

  name = "";
  user!:User;
  repository: any;


  constructor(private httpservice: HttpserviceService) { }

  ngOnInit(){
    this.getUsers('joankirui')
    
  }

  getUsers(name:string) {
    this.httpservice.getUser(name).then((response) => {
      this.getRepos(name)
      this.user = this.httpservice.user;
      console.log(this.user)
    });
  }
  getRepos(name:string) {
    this.httpservice.getRepo(name).then((response) => {
      this.repository = response;
      console.log(this.repository);
    });
  }
}
