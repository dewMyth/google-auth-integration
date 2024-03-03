import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  loggedInUser: any;
  name: string = '';
  email: string = '';
  profilePictureUrl = '';

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(
      sessionStorage.getItem('loggedInUser') || ''
    );

    console.log(this.loggedInUser);

    const { name, email, picture } = this.loggedInUser;
    this.name = name;
    this.email = email;
    this.profilePictureUrl = picture;

    console.log(this.name, this.email, this.profilePictureUrl);
  }
}
