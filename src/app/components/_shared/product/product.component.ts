import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements AfterViewInit, OnDestroy {
  
  private observer: IntersectionObserver | null = null;
  private animated = false;
  @Input() ourProducts: any;

  constructor( public router: Router, private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(entries => {
      if (!this.animated && entries[0].isIntersecting) {
        this.animated = true;
        this.renderer.addClass(this.el.nativeElement.querySelector('.animateLeft'), 'animate__slideInLeft');
        this.renderer.addClass(this.el.nativeElement.querySelector('.animateRight'), 'animate__slideInRight');
        this.observer?.disconnect();
      }
    });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  navigateToDemo(productName: string) {
    this.router.navigate([`/demo/`, productName]);
  }

  navigateToProduct(productName: string) {
    this.router.navigate([`/softwares/`, productName]);
  }
}
