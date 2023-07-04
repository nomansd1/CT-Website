import { Component } from '@angular/core';

@Component({
  selector: 'app-our-edges',
  templateUrl: './our-edges.component.html',
  styleUrls: ['./our-edges.component.css']
})
export class OurEdgesComponent {
  edgeGridTiles = [
    { title: 'Years of Industry Experience', stats: 25 },
    { title: 'Mobile Applications', stats: 11 },
    { title: 'Diversified Business Verticals Powered by Our S&D', stats: 15 },
    { title: 'S&D Add-On Modules', stats: 7 },
  ]
}
