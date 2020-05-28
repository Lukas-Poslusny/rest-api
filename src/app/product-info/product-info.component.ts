import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CategoriesService} from '../services/categories.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryInfo} from '../models/CategoryInfo.model';
import {Product} from '../models/Product.model';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  public product: Product;
  constructor(private httpClient: HttpClient, private categoryS: CategoriesService, private route: ActivatedRoute) {
  }

  get parameterKeys() {
    return Object.keys(this.product.parameters);
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.categoryS.getProduct(params.id)
          .subscribe((products: Product) => {
            this.product = products;
          });
      });

  }

}
