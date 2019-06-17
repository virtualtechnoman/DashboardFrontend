import { Component, OnInit } from '@angular/core';
import { Customers } from '../../shared/services/customers.service.service';
import { Region } from '../../shared/services/region.service.service';
import { City } from '../../shared/services/city.service.service';
import { District } from '../../shared/services/district.service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  allCities:any[]=[];
  allDistricts:any[]=[];
  allRegions:any[]=[];
  allCustomers:any[]=[];
  selectedCity:any;
  selectedRegion:any;
  selectedDistrict:any;
  items:any=[];
  constructor( private customerService:Customers, private regionService:Region, private city:City, private districtService:District) {
    this.regionService.getallRegion().subscribe((res:any[])=>{
      this.allRegions = res;
    });    
    this.city.getallcity().subscribe((res:any[])=>{
      this.allCities = res;
    });    
    this.districtService.getallDistrict().subscribe((res:any[])=>{
      this.allDistricts = res;
    });
    this.getAllCustomers();
   }

  ngOnInit() {
  }

  addCustomer(event) {
    let target = event.target;
    const customer_id = target.querySelector('#customer_id').value;
    const customer_name = target.querySelector('#customer_name').value;
    const distirbutor = target.querySelector('#distirbutor').value;
    const customer_type = target.querySelector('#customer_type').value;
    const sector = target.querySelector('#sector').value;
    const region_name = this.selectedRegion;
    const city_name = this.selectedCity;
    const district_name = this.selectedDistrict;
    const notes = target.querySelector('#notes').value;
    const is_active = true;
    this.customerService.addCustomer(customer_id, customer_name, distirbutor, customer_type, sector, region_name, city_name, district_name, notes, is_active)
      .subscribe(data => this.allCustomers.push(data));
  }

  deleteCustomer(index) {
    this.customerService.deleteCustomer(this.allCustomers[index]._id).subscribe(() => this.allCustomers.splice(index, 1))
  }

  getAllCustomers(){
    this.customerService.getallCustomer().subscribe((res:[])=>{
      this.allCustomers = res;
      console.log(this.allCustomers)
    })
  }

}
