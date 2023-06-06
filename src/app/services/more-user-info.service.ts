import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../config/env/config';
// import { Modele } from '../models/modele';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class MoreUserInfoService {

  constructor(
    private http: HttpClient,
    private localStorageService: TokenStorageService,
    
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
    })
  };

  PostMoreInfo(data:any): Observable<any> {
    return this.http.put<any>(environment.apiUrl + '/user/update',data,this.httpOptions)
  }
}
