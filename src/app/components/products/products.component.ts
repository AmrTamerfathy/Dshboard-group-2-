import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Iproducts } from 'src/app/Models/iproducts';
import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  product: Iproducts[] = [];
  prdObj: Iproducts = {} as Iproducts;
  constructor(private ps: ProductsService) { }

  ngOnInit(): void {
    this.getAllproducts();
  }

  getAllproducts() {
    this.ps.getAllProducts().subscribe(res => {
      this.product = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert('Error while fetching product data');
    })

  }

  addProduct() {
    if (this.prdObj.name == '' || this.prdObj.price == null || this.prdObj.catid == null || this.prdObj.quantity == null) {
      alert('Fill all input fields');
      return;
    }
    this.ps.addproduct(this.prdObj);
    this.resetForm();
  }

  resetForm() {
    this.prdObj.id = '';
    this.prdObj.name = '';
    this.prdObj.price = 0;
    this.prdObj.catid = 0;
    this.prdObj.quantity = 0;
  }


  deleteProduct(prodelete: Iproducts) {
    if (window.confirm('Are you sure you want to delete ' + prodelete.name + '?')) {
      this.ps.deleteproduct(prodelete);
    }
  }

  updateproduct(prd:any){
   this.ps.updateProduct(prd,prd.id);
  this.resetForm();
  }
  update(prd:any){
    // console.log(prd);

    this.prdObj = prd;
  }

}

