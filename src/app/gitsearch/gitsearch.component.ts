import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {

  user!: User[];

  constructor(private http:HttpClient) { }

  ngOnInit(){
    interface ApiResponse{
      name:string;
      bio:string;
    }
  }

}
