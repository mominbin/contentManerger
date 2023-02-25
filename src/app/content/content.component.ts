import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}

  goToComponent() {
    this.router.navigate(
      ['/component-path', { outlets: { myOutlet: ['outlet-component'] } }],
      { queryParams: { id: '123' } }
    );
  }
}
