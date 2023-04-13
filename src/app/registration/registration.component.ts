import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MockServerService } from '../mock-server.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private mockServer: MockServerService) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const email = this.registrationForm.get('email')?.value;
      const password = this.registrationForm.get('password')?.value;
      const role = this.registrationForm.get('role')?.value;

      this.mockServer.register(email, password, role).subscribe(response => {
        console.log(response);
      });
    }
  }
}
