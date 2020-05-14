import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CategoriesService} from './services/categories.service';
import {Router} from '@angular/router';
import {Category} from './models/Category.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rest-api2';

  public array: Category[];
  constructor(private httpClient: HttpClient, private categoryS: CategoriesService, private router: Router) {
    this.categoryS.getCategories()
      .subscribe(
        (data: Category[]) => {
          this.array = data;
        }, (error) =>  {
          console.log(error);
        }
      );
  }

  getLink(id) {
    this.router.navigate(['/products'], {queryParams: {id}});
  }
}
