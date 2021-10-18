import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../services/httpservice/httpservice.service';
import { User } from 'src/app/user';
import { Repo } from 'src/app/repo';

@Component({
  selector: 'app-reposearch',
  templateUrl: './reposearch.component.html',
  styleUrls: ['./reposearch.component.css']
})
export class ReposearchComponent implements OnInit {
  name = "";
  

  constructor(private httpservice: HttpserviceService) { }

  ngOnInit(): void {
    this.getRepos('joankirui');
  }
  getRepos(name:string) {
    this.httpservice.getRepo(name).then((response) => {
      console.log(response);
    });
  }

}
