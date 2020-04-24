import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  data = '';

  constructor() { }

  ngOnInit() {
  }

  inputSomethings(event) {
    this.data = event.target.value;
  }

}
