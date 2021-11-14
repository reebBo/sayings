import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: any;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

constructor(private http:HttpClient){ }
  
ngOnDestroy(): void {
  // Do not forget to unsubscribe the event
  this.dtTrigger.unsubscribe();
}

  ngOnInit(){
  this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 12
    };

    this.http.get<any>('https://type.fit/api/quotes')
    .subscribe
        (res => {
          this.data = res;
          this.dtTrigger.next()  
        })
}

}