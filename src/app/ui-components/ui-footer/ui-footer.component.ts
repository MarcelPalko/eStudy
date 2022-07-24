import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'estudy-ui-footer',
  templateUrl: './ui-footer.component.html',
  styleUrls: ['./ui-footer.component.scss'],
})
export class UiFooterComponent implements OnInit {
  date: Date = new Date();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirectToAboutPage() {
    this.router.navigate(['/about']);
  }
}
