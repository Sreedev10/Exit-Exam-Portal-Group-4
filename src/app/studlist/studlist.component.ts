import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-studlist',
  templateUrl: './studlist.component.html',
  styleUrls: ['./studlist.component.css']
})
export class StudlistComponent implements OnInit {

  constructor(private api:ApiService) { this.dataFromApi()}
  dataFromApi=()=>{

    this.api.viewall().subscribe(

      response=>{

        this.viewbatch=response
      }
    )
  }

viewbatch:any=[]

  ngOnInit(): void {
  }

}
