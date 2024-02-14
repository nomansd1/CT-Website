import { Component } from '@angular/core';

@Component({
  selector: 'app-network-grid',
  templateUrl: './network-grid.component.html',
  styleUrls: ['./network-grid.component.css']
})
export class NetworkGridComponent {
  networks = [
    { title: 'Pakistan',
      flag: '../../../../assets/pkflag.png',
      office: 'head office',
      map: '../../../../assets/pakmap.png',
      regHead: 'regional office',
      regionalOffice: 'Lahore',
      address: [
        { title: 'Suite No B-5/4. FL-9/6 (Junaid Plaza),' },
        { title: 'Gulshan-E-Iqbal Block 6,' },
        { title: 'Main Rashid Minhas Road,' },
        { title: 'Karachi-75300, Pakistan.' },
        { title: '+92 21 34971995' }
      ],
      branchHead: 'branch offices',
      branchOffices: [
        { title: 'Multan' },
        { title: 'Sukkur' },
        { title: 'Peshawar' },
        { title: 'Abbottabad' },
        { title: 'Islamabad' },
        { title: 'Gujranwala' },
        { title: 'Faislabad' },
        { title: 'Sahiwal' },
        { title: 'Hyderabad' },
      ]
    },
    { title: 'Saudia Arabia',
      flag: '../../../../assets/saflag.png',
      office: 'country office',
      partner: '(JV partner)',
      map: '../../../../assets/samap.png',
      address: [
        { title: 'Olaya View Tower (Opposite to Kingdom Tower),'},
        { title: '2nd Floor, Office No. 4027,'},
        { title: 'King Fahad Road, Riyadh,'},
        { title: 'Kingdom of Saudia Arabia.'},
        { title: '+96 659 427 4605'}
      ]
    },
    { title: 'United Arab Emirates',
      flag: '../../../../assets/uaeflag.png',
      office: 'country office',
      partner: '(JV partner)',
      map: '../../../../assets/uaemap.png',
      address: [ 
        { title: 'ln5 tech Building, HD 11B First Floor,' },
        { title: 'Dubai Internet City.' },
        { title: 'Dubai, U.A.E.' },
        { title: '+971 55 548 8093'} 
      ]
                
    },
    { title: 'Qatar',
      flag: '../../../../assets/qatflag.jpg',
      office: 'country office',
      partner: '(JV partner)',
      map: '../../../../assets/qtmap.png',
      address: [
        { title: 'The Eighteen Tower, 19th Floor,'},
        { title: 'Zone 69, Street 303, Building 230,'},
        { title: 'Lusail Marina, Qatar.'},
        { title: '+974 5573 0350'}
      ]
    }
  ]
}
