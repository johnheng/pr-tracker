import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {

  constructor() { }

  authToken: string;

  ngOnInit() {

  }

  submit() {
    if (this.authToken != null) {
      chrome.storage.local.set({ "token": this.authToken })
    }
  }

}
