import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  public edit:FormGroup;
  data:any;
  id:any;

  constructor(public formBuilder:FormBuilder,
              public productservice:ProductsService,
              private route:Router,
              public router:ActivatedRoute) 
  { 
    this.edit=formBuilder.group({
    name :["",Validators.required],
    details :["",Validators.required],
    image:[""],
    price:[ ,Validators.required],
    })
  }
              

  ngOnInit(): void {
    this.id=this.router.snapshot.params["id"];
    //get item using id
    this.productservice.getProduct(this.id).subscribe(
      (response)=>{
        this.data=response;
        console.log("data",this.data);
        this.edit.patchValue(this.data);
      }
    )
  }
  update(){
    const st=this.edit.value
    this.productservice.updateProduct(this.id,st).subscribe(
      (response)=>{
        this.edit.reset();
        console.log(response)
        this.route.navigateByUrl('/')
      }
    )
  }

}
