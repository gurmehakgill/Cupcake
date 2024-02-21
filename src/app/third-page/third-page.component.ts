import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {
  quantity: number = 0;
  selectedFlavor: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quantity = +params['quantity'];
      this.selectedFlavor = params['flavor'];
    });
  }

  goBack(): void {
    this.router.navigate(['/second-page', this.quantity]);
  }

  cancel(): void {
    this.router.navigate(['/first-page']);
  }

  sendOrder(): void {
    console.log('Order sent');
  }
}
