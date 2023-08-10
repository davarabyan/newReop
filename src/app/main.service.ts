import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  path = "https://fakestoreapi.com/"

  getdata() {
    this.http.get(this.path + 'users').subscribe((res => {
      console.log(res)
    }))
  }





}
