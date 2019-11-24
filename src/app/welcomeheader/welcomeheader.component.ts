import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcomeheader',
  templateUrl: './welcomeheader.component.html',
  styleUrls: ['./welcomeheader.component.scss']
})
export class WelcomeheaderComponent implements OnInit {
  title = 'Send-News';
  constructor() { }

  ngOnInit() {
  }

}
