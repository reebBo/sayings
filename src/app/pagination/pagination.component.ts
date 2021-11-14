import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
 
quotes: any[] = [];
currentQuote?: any;
currentIndex = -1;
title = '';

page = 1;
count = 0;
pageSize = 11;
pageSizes = [15, 25, 50];
  author: string='';
  text: string='';

constructor(private tutorialService: PaginationService) { }

ngOnInit(): void {
  this.retrieveTutorials();
}

getRequestParams(author: string, text: string, page: number, pageSize: number): any {
  // tslint:disable-next-line:prefer-const
  let params: any = {};

   
  if (page) {
    params[`page`] = page - 1;
  }

  if (pageSize) {
    params[`size`] = pageSize;
  }

  return params;
}

retrieveTutorials(): void {
  const params = this.getRequestParams(this.author, this.text,  this.page, this.pageSize);

  this.tutorialService.getAll(params)
  .subscribe(
    response => {
      // const { tutorials, totalItems } = response;
      this.quotes = response;
      this.count = response.length;
      // alert(response);
    },
    error => {
      console.log(error);
    });
}

handlePageChange(event: number): void {
  this.page = event;
  this.retrieveTutorials();
}

handlePageSizeChange(event: any): void {
  this.pageSize = event.target.value;
  this.page = 1;
  this.retrieveTutorials();
}
setActiveTutorial(tutorial: any, index: number): void {
  this.currentQuote = tutorial;
  this.currentIndex = index;
}

}
 
