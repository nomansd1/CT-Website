import { Component } from '@angular/core';

@Component({
  selector: 'app-alliances-grid',
  templateUrl: './alliances-grid.component.html',
  styleUrls: ['./alliances-grid.component.css']
})
export class AlliancesGridComponent {
  memberships = [
    { img: '../../../../assets/member1.png' },
    { img: '../../../../assets/member2.png' },
  ]
  partners = [
    { img: '../../../../assets/partner1.png', title: 'ip co sell-ready solution partner' },
    { img: '../../../../assets/partner2.png', title: 'isv partner' },
  ]
  ventures = [
    { title: 'united arab emirates', img: '../../../../assets/vent1.png' },
    { title: 'saudia arabia', img: '../../../../assets/vent2.png' },
  ]
}
