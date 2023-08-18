import { Component, ViewChild, AfterViewInit, QueryList, ViewChildren, ElementRef, OnInit } from '@angular/core';
import { CountUpDirective } from 'ngx-countup';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AnimateOberverService } from 'src/app/services/animate-oberver.service';

@Component({
  selector: 'app-our-edges',
  templateUrl: './our-edges.component.html',
  styleUrls: ['./our-edges.component.css'],
})
export class OurEdgesComponent implements AfterViewInit, OnInit{ 
  shouldAnimate = false;
  isHovered = false;
  countInitialValue = 0;
  counterVisible = false

  constructor(
    private animateObserver: AnimateOberverService,
  ) {}

  ngOnInit(): void {
    const animatedElement = document.getElementById('edgeHeading');
    const animatedElement2 = document.getElementById('edgeGrid');
    this.animateObserver.observeElementForAnimation(animatedElement, 'animate__slideInLeft');
    this.animateObserver.observeElementForAnimation(animatedElement2, 'animate__slideInRight');
  }

  // Use ViewChildren to get a list of all CountUpDirective elements
  @ViewChildren(CountUpDirective) countUpDirectives: QueryList<CountUpDirective>;
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  ngAfterViewInit(): void {
    this.onSlideChange();
  }

  edgeGridTiles1 = [
    { title: 'Years of Industry Experience', stats: 25 },
    { title: 'Mobile Applications', stats: 11 },
    { title: 'Diversified Business Verticals Powered by Our S&D', stats: 15 },
    { title: 'S&D Add-On Modules', stats: 7 },
  ]
  edgeGridTiles2 = [
    { title: 'Distribution Sites Implementation Experience', stats: 10000 },
    { title: 'Higly Capable Team of Professionals', stats: 150 },
    { title: 'Resturant & Food Outlets Implementation Experience', stats: 200 },
    { title: 'Supermarkets Implementation Experience', stats: 100 },
  ]
  edgeGridTiles3 = [
    { title: 'Offices in Pakistan & Growing...', stats: 11 },
    { title: 'e.suite Modules for S&D Business Optimization', stats: 7 },
    { title: 'ERP Modules Suite', stats: 6 },
  ]
  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    this.swiperContainer.nativeElement.addEventListener('slidechange', (event: Event) => {
      this.counterVisible = false;  
      setTimeout(() => {
          // Iterate through each CountUpDirective element and reanimate
          this.counterVisible = true
          this.countUpDirectives.forEach(countUpDirective => countUpDirective.animate());
        }, 1200);
    });
  }
}
