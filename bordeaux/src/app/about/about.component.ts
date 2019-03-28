import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  singleUnknownResponse: Object;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getSingleUnknownResponse().subscribe(data => {
      this.singleUnknownResponse = data[0];
      console.log(this.singleUnknownResponse);
    }) 
  }

}
