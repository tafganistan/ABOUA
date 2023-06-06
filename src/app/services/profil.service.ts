import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../config/env/config';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(
    private http: HttpClient,
    private localStorageService: TokenStorageService
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
    })
  };

  getUserProfilInfo(userID :string): Observable<any>{
    const recovery = this.localStorageService.getRecovery()
    return this.http.get(environment.apiUrl + `/user/show_user/${parseInt(userID,10)}?recovery=${parseInt(recovery,10)}`,this.httpOptions)
  }

  updateUserProfilInfo(data:any): Observable<any> {
    return this.http.put<any>(environment.apiUrl + '/user/update',data,this.httpOptions)
  }
}
