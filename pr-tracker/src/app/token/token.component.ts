import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {

  constructor(private router: Router) { }
  tokenForm: FormGroup;

  ngOnInit() {
    this.tokenForm = new FormGroup({
      'token': new FormControl("", [Validators.required]),
      'repos': new FormControl("", [Validators.required])
    });
  }

  submit() {
    console.log(this.tokenForm.getRawValue());
    if (this.tokenForm.valid) {
      localStorage.setItem("token", this.tokenForm.get("token").value);
      localStorage.setItem("repos", this.tokenForm.get("repos").value);
      this.router.navigate(['/homepage']);
    }
  }
}
