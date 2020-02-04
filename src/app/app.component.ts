import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'framesAssignment';
  url = 'https://reqres.in/api/users?page=2';
  data;
  original_data;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.get_data(this.url).subscribe((res)=> {
      console.log("response",res);
      this.data = res.data;
      this.original_data = res.data;
      },
    (error)=>{
        console.log(error);
    });
  }

  applyFilter(event) {
    let temp_arr = []
    this.original_data.map(item => {
      if (item.email.includes(event))
        temp_arr.push(item);
    });
    this.data = temp_arr;
  }
}
