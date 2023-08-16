import { Component } from '@angular/core';

@Component({
  selector: 'app-finance-grid',
  templateUrl: './finance-grid.component.html',
  styleUrls: ['./finance-grid.component.css']
})
export class FinanceGridComponent {
  tiles =[
    { url: '../../../../assets/fin1.png', title: 'cloud based app' },
    { url: '../../../../assets/fin2.png', title: 'works in live environment' },
    { url: '../../../../assets/fin3.png', title: 'accounts payable' },
    { url: '../../../../assets/fin4.png', title: 'accounts receivable' },
    { url: '../../../../assets/fin5.png', title: 'GL ledger' },
    { url: '../../../../assets/fin6.png', title: '9 level chart of accounts' },
    { url: '../../../../assets/fin7.png', title: 'balance sheet' },
    { url: '../../../../assets/fin8.png', title: 'trial balance' },
    { url: '../../../../assets/fin9.png', title: 'receipt voucher' },
    { url: '../../../../assets/fin10.png', title: 'payment voucher' },
    { url: '../../../../assets/fin11.png', title: 'payment to supplier' },
    { url: '../../../../assets/fin12.png', title: 'budget' },
    { url: '../../../../assets/fin13.png', title: 'cash flow management' },
    { url: '../../../../assets/fin14.png', title: 'profit & loss' },
    { url: '../../../../assets/fin15.png', title: 'customer management' },
    { url: '../../../../assets/fin16.png', title: 'tax management' },
    { url: '../../../../assets/fin17.png', title: 'asset management (add on)' },
    { url: '../../../../assets/fin18.png', title: '3rd party integeration' },
    { url: '../../../../assets/fin19.png', title: 'bank reconcillation' },
    { url: '../../../../assets/fin20.png', title: 'cheque printing module' },
    { url: '../../../../assets/fin21.png', title: 'petty cash management' },
    { url: '../../../../assets/fin22.png', title: 'capex management' },
    { url: '../../../../assets/fin23.png', title: 'project accounting' },
    { url: '../../../../assets/fin24.png', title: 'branding contracts' },
    { url: '../../../../assets/fin25.png', title: 'tightly integerated with cloud tenants ERP module' },
    { url: '../../../../assets/fin26.png', title: 'real time reporting' },
    { url: '../../../../assets/fin27.png', title: 'business intelligence report & static report' },
    { url: '../../../../assets/fin28.png', title: 'MS power BI dashboard' },
  ]
}
