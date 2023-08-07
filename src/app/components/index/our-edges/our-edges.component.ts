import { Component, ViewChild, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { CountUpDirective } from 'ngx-countup';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-our-edges',
  templateUrl: './our-edges.component.html',
  styleUrls: ['./our-edges.component.css']
})
export class OurEdgesComponent implements AfterViewInit{ 

  // Use ViewChildren to get a list of all CountUpDirective elements
  @ViewChildren(CountUpDirective) countUpDirectives: QueryList<CountUpDirective>;

  ngAfterViewInit(): void {
    this.reanimate();
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

  reanimate() {
    setInterval(() => {
      // Iterate through each CountUpDirective element and reanimate
      this.countUpDirectives.forEach(countUpDirective => countUpDirective.animate());
    }, 2500);
  }
}
