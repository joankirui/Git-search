import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../services/httpservice/httpservice.service';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {

  name = "";


  constructor(private httpservice: HttpserviceService) { }

  ngOnInit(){
    this.getUsers('joankirui')
    
  }

  getUsers(name:string) {
    this.httpservice.getUser(name).then((response) => {
      console.log(response);
    });
  }
}
