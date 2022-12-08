import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lja-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router) {}

  logar() {
    this.router.navigate(['/inicio']);
    // this.router.navigateByUrl('inicio');
  }
}
