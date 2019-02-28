import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {

  constructor(private router: Router) { }

  token: FormControl = new FormControl();

  ngOnInit() {

  }

  submit() {
    console.log(this.token.value);
    if (this.token.value != null) {
      localStorage.setItem("token", this.token.value);
      this.router.navigate(['/homepage']);
    }
  }

}
