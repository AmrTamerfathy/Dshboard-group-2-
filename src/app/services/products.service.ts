import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Iproducts } from './../Models/iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private fire:AngularFirestore) { }
//Add
 addproduct(product:Iproducts){
  product.id=this.fire.createId();
  return this.fire.collection('/products').add(product);
//Delete
 }
 deleteproduct(product:Iproducts){
  return this.fire.doc('/products/'+product.id).delete();
 }
 //Update
 updateProduct(product:any , productid:string ){
return this.fire.doc(`products/${productid}`).update(product)
 }

 //GetAll
  getAllProducts():Observable<any[]>{
    return this.fire.collection("products").snapshotChanges();
  }
}
