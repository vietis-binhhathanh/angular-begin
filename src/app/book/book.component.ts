import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  imageUrl = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  forgot = false;

  toogleForgot() {
    this.forgot = !this.forgot;
  }

  constructor() { }

  ngOnInit() {
  }

}
