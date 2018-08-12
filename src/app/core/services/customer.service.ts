import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
      'tenantName': 'tenant_1'
  
    })
  };

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  httpData;
  constructor(private  _httpClient:HttpClient) {
    this.httpData = _httpClient;
   }
   getuserJson():Observable<any>{
      return this.httpData.get('http://AVS_AMS_SERVICE:8080/AMS/rest/userSearch?searchBy=username&username=demo',httpOptions)
   }
}




