import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-studlist',
  templateUrl: './studlist.component.html',
  styleUrls: ['./studlist.component.css']
})
export class StudlistComponent implements OnInit {

  viewbatch: any[] = [];
  batchData: any[] = [];

  constructor(private api: ApiService) {
    this.dataFromApi();
  }

  dataFromApi = () => {
    this.api.viewall().subscribe(
      response => {
        this.viewbatch = response;
        this.organizeDataByBatch();
      }
    );
  }

  organizeDataByBatch(): void {
    const batches = new Set(this.viewbatch.map(item => item.batch));

    batches.forEach(batch => {
      const registrationsForBatch = this.viewbatch.filter(item => item.batch === batch);
      this.batchData.push({ batch, registrations: registrationsForBatch });
    });
  }

  ngOnInit(): void {
  }

}