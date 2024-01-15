// exitadmin.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exitadmin',
  templateUrl: './exitadmin.component.html',
  styleUrls: ['./exitadmin.component.css']
})
export class ExitadminComponent implements OnInit {

  credentials = {
    email: '',
    password: ''
  };

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    // Additional initialization logic if needed
  }

  login(): void {
    // Ensure the login method is called
    console.log('Login method called');

    if (this.credentials.email === 'admin@gmail.com' && this.credentials.password === 'admin') {
      // Allowed credentials, perform login
      console.log('Valid credentials');
      this.api.login(this.credentials).subscribe(
        (response) => {
          console.log("Login successful", response);

          this.router.navigate(['/admindash']);

          alert("Login Successfully");
          // Handle successful login (e.g., redirect to another page)
        },
        (error) => {
          console.error("Login failed", error);

          // Handle login error (e.g., show error message to the user)
        }
      );
    } else {
      // Invalid credentials
      console.log("Invalid credentials");
      // Handle invalid credentials (e.g., show an error message to the user)
      alert("Invalid credentials. Login failed.");
    }
  }
}
