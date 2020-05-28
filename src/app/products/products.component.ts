import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CategoriesService} from '../services/categories.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryInfo} from '../models/CategoryInfo.model';
import {Product} from '../models/Product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public categoryInfo: CategoryInfo;
  public products: Product[];
  public currentPage = 0;
  public pageCount;

  increaseCurrentPage(pageNumber) {
    this.currentPage += pageNumber;
    this.loadCategory();
  }

  changeCurrentPage(pageNumber) {
    this.currentPage = pageNumber;
    this.loadCategory();
  }

  constructor(private httpClient: HttpClient, private categoryS: CategoriesService, private router: Router, private route: ActivatedRoute) {
  }

  getLink(id) {
    this.router.navigate(['/product-info'], {queryParams: {id}});
  }

  loadCategory() {
    this.route.queryParams
      .subscribe(params => {
        this.categoryS.getCategory(params.id, this.currentPage)
          .subscribe((category: CategoryInfo) => {
            this.pageCount = category.pagesCount;
            this.categoryInfo = category;
            this.products = category.products;
          });
      });
  }

  ngOnInit() {
    this.loadCategory();
  }

}
