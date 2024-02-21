import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  quantity: number = 0;
  selectedFlavor: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quantity = +params['quantity'];
    });
  }

  goBack(): void {
    this.router.navigate(['/first-page']);
  }

  cancel(): void {
    this.router.navigate(['/first-page']);
  }

  next(): void {
    if (this.selectedFlavor) {
      this.router.navigate(['/third-page', this.quantity, this.selectedFlavor]);
    } else {
      alert("Please select a flavor!");
    }
  }

  selectFlavor(flavor: string): void {
    this.selectedFlavor = flavor;
  }
}
