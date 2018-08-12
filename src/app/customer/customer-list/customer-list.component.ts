import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../core/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})

export class CustomerListComponent implements OnInit {
  serviceVar : any;
  private httpexample:CustomerService;

  constructor(private _service: CustomerService) { 
    this.serviceVar = _service;
  }

  ngOnInit() {

    this.serviceVar.getuserJson().subscribe(
      data => (console.log(data))
    )
  }
}