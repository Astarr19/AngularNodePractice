import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Record } from '../record';

@Component({
  selector: 'app-root',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit{
  records: Record[] = [];
  constructor(private api: DatabaseService) {}

  ngOnInit(): void {
    this.api.getRecords('/record').subscribe((data: Record[]) => {
      this.records = data;
    })
  }
}
