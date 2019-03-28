import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  singleUnknownResponse: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getSingleUnknownResponse().subscribe(data => {
      this.singleUnknownResponse = data;
      console.log(this.singleUnknownResponse);
    }) 
  }

}
