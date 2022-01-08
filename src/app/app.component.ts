import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ngx-datatable';
  rows = [
    {
      name: "Mercy", age: 10, town: "Nairobi", country: "Kenya"
    },
    {
      name: "Vincent", age: 40, town: "Kampala", country: "Uganda"
    },
    {
      name: "Wesley", age: 41, town: "Cairo", country: "Egypt"
    },
  ];
}
