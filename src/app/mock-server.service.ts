import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockServerService {
  private roles = ['employer', 'candidate'];

  constructor() { }

    
    authenticate(email: string, password: string) {
      return of({ success: true, role: this.roles[Math.floor(Math.random() * this.roles.length)] });
    }
  
    
    register(email: string, password: string, role: string) {
      return of({ success: true });
    }
  }

