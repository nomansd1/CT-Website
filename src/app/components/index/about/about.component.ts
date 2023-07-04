import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  aboutGridTiles = [
    {title: 'Technologies', url: '../../../../assets/abtgrid1.png'},
    {title: 'Support Mechanism', url: '../../../../assets/abtgrid2.png'},
    {title: 'On-Boarding process', url: '../../../../assets/abtgrid3.png'},
    {title: 'Our Services Network', url: '../../../../assets/abtgrid4.png'},
  ]

}
