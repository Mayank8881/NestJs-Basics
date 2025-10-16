import {Injectable } from '@nestjs/common';

export interface Product{
    id:number,
    name:string,
    price:number
}

@Injectable()
export class ProductService {
    private products:Product[]=[
        {id:1,name:'Mobile',price:20000},
        {id:2,name:'Laptop',price:60000},
        {id:3,name:'Fridge',price:40000}
    ];
    getAllProducts(){
        return this.products;
    }

    getProductByID(id:number){
        return this.products.find((product)=>
            product.id===id
        )
    }
}
