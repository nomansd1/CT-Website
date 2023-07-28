import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  aboutGridTiles = [
    {title: 'Technologies', url: '../../../../assets/abtgrid1.png', link: 'technologies'},
    {title: 'Support Mechanism', url: '../../../../assets/abtgrid2.png', link: 'support'},
    {title: 'On-Boarding process', url: '../../../../assets/abtgrid3.png', link: 'boarding'},
    {title: 'Our Services Network', url: '../../../../assets/abtgrid4.png', link: 'networks'},
  ]

}
