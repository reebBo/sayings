import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 


@Injectable({
  providedIn: 'root'
})
export class PaginationService {


  baseUrl = 'https://type.fit/api/quotes';
  constructor(private http: HttpClient) { }

  getAll(params: any): Observable<any> {
    return this.http.get<any>(this.baseUrl, { params });
  }
}
