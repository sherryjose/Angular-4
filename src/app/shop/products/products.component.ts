import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products=["Shoes","Watches","Jewelry","Perfume","Sapphire","Sun-block"]
  constructor() { }
giftMe=function(counter)
{
  alert("Buy me this "+this.products[counter])
  console.log("Buy me this "+this.products[counter])

}
  ngOnInit() {
  }

}
