import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewreg',
  templateUrl: './viewreg.component.html',
  styleUrls: ['./viewreg.component.css']
})
export class ViewregComponent implements OnInit {
        Name=""
        Emailaddress=""
        batch=""
        gender=""
        Mobilenumber=""
        

  


  constructor(private api:ApiService) { this.dataFromApi()}

  dataFromApi=()=>{

    this.api.view().subscribe(

      response=>{

        this.viewreg=response
      }
    )
  }

viewreg:any=[]

  ngOnInit(): void {
  }

}
