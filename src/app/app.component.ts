import { Component } from '@angular/core';

import { OauthService } from './services/oauth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trec-apps-client';

  constructor(private auth: OauthService, private route: Router) {}

  logout() {
    this.auth.logout();
  }
}
