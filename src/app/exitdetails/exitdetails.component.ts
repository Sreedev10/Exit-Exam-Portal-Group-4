import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-exitdetails',
  templateUrl: './exitdetails.component.html',
  styleUrls: ['./exitdetails.component.css']
})
export class ExitdetailsComponent implements OnInit {

    Name=""
    Emailaddress=""
    batch=""
    gender=""
    Mobilenumber=""

  constructor(private api: ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  add():void {
    const registrationData = {  
    Name: this.Name,
      Emailaddress: this.Emailaddress,
      batch: this.batch,
      gender: this.gender,
      Mobilenumber: this.Mobilenumber 
    };
    if (!this.Name || !this.Emailaddress || !this.Mobilenumber || !this.batch || !this.gender) {
      alert("All fields are required.");
      return; // Stop execution if any field is empty
    }
    const mobileRegex = /^\d{10}$/;

if (!mobileRegex.test(registrationData.Mobilenumber)) {
  alert("Invalid mobile number. Please enter a 10-digit number.");
  return; // Stop execution if validation fails
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(registrationData.Emailaddress)) {
  alert("Invalid email address. Please enter a valid email.");
  return; // Stop execution if validation fails
}

    this.api.reg(registrationData).subscribe(
      (response: any) => {
        console.log("Response", response);

        if (response.success) {

          alert("Registration successful!");
          this.router.navigate(['/']); 
          // Redirect to the dashboard on successful registration
        } else {
          alert("Email already registered. Please use a different email.");

        }
      },
      (error) => {
        console.error("Error:", error);
        alert("Email already registered. Please use a different email");
      }
    );
  }
}