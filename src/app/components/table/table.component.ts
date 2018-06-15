import { CampDataService } from './../../services/camp-data.service';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  data: LocalDataSource
  constructor(private campService: CampDataService, private route:ActivatedRoute) {
    this.data = new LocalDataSource();
    this.data.setPaging(100,100, false);
  }
  settings = {
    columns: {
      rollNo: {
        title: 'Roll No.',
        filter: false,
        editable: false
      },
      name: {
        title: 'Full Name',
        filter: false,
        editable: false
      },
      dob: {
        title: 'Date of Birth',
        filter: false,
        editable: false
      },
      address: {
        title: 'Address',
        filter: false,
        editable: false
      },
      phone: {
        title: 'Phone',
        filter: false,
        editable: false
      }
    }
  };
  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      let campNo=+params.get('campNo')
      this.campService.getCamperData(campNo).then((resp) => {
        this.data.load(resp);
      });
    });

    //
  }
  onSearch(query: string = '') {
    this.data.setFilter([
      // fields we want to include in the search
      {
        field: 'rollNo',
        search: query
      },
      {
        field: 'name',
        search: query
      },
      {
        field: 'dob',
        search: query
      },
      {
        field: 'address',
        search: query
      },
      {
        field: 'phone',
        search: query
      }
    ], false);
  }
}
