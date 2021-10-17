import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../services/httpservice/httpservice.service';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {


  constructor(private httpservice: HttpserviceService) { }

  ngOnInit(){
    this.getUsers('joankirui')
  }

  getUsers(userName: string) {
    this.httpservice.getUser(userName).then((response) => {
      console.log(response);
    });
  }
}
