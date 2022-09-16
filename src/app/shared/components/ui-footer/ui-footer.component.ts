import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'estudy-ui-footer',
  templateUrl: './ui-footer.component.html',
  styleUrls: ['./ui-footer.component.scss'],
})
export class UiFooterComponent {
  public date: Date = new Date();

  constructor(private router: Router) {}

  public redirectToAboutPage() {
    this.router.navigate(['/about']);
  }

  public redirectToDevRepo() {
    window.open('https://github.com/MarcelPalko/eStudy', '_blank');
  }
}
