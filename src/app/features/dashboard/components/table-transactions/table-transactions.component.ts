import { Component, OnInit } from '@angular/core';

interface Transaction {
  name: string;
  status: string;
  date: Date;
  amount: number;
  icon: string
}

@Component({
  selector: 'app-table-transactions',
  templateUrl: './table-transactions.component.html',
  styleUrl: './table-transactions.component.scss'
})
export class TableTransactionsComponent {

  transactions: Transaction[] = [];

  ngOnInit() {
    this.transactions = [
      { icon: 'pi pi-check-circle', name: 'Liam Garcia', status: 'Complete', date: new Date('2024-12-01'), amount: 1200000 },
      { icon: 'pi pi-times-circle', name: 'Emma Wilson', status: 'Error', date: new Date('2024-12-02'), amount: -250000 },
      { icon: 'pi pi-exclamation-circle', name: 'Noah Martinez', status: 'Pending', date: new Date('2024-12-03'), amount: 620000 },
      { icon: 'pi pi-check-circle', name: 'Olivia Anderson', status: 'Complete', date: new Date('2024-12-04'), amount: 750000 },
      { icon: 'pi pi-times-circle', name: 'James Thomas', status: 'Error', date: new Date('2024-12-05'), amount: -140000 },
      { icon: 'pi pi-check-circle', name: 'Sophia Taylor', status: 'Complete', date: new Date('2024-12-06'), amount: 330000 },
      { icon: 'pi pi-exclamation-circle', name: 'William Moore', status: 'Pending', date: new Date('2024-12-07'), amount: 400000 },
      { icon: 'pi pi-times-circle', name: 'Ava Jackson', status: 'Error', date: new Date('2024-12-08'), amount: -510000 },
      { icon: 'pi pi-check-circle', name: 'Mason Harris', status: 'Complete', date: new Date('2024-12-09'), amount: 990000 },
      { icon: 'pi pi-check-circle', name: 'Isabella Young', status: 'Complete', date: new Date('2024-12-10'), amount: 470000 },
      { icon: 'pi pi-times-circle', name: 'Ethan Walker', status: 'Error', date: new Date('2024-12-11'), amount: -300000 },
      { icon: 'pi pi-check-circle', name: 'Mia Martinez', status: 'Complete', date: new Date('2024-12-12'), amount: 250000 },
      { icon: 'pi pi-exclamation-circle', name: 'Lucas White', status: 'Pending', date: new Date('2024-12-13'), amount: 450000 },
      { icon: 'pi pi-check-circle', name: 'Ella Rodriguez', status: 'Complete', date: new Date('2024-12-14'), amount: 530000 },
      { icon: 'pi pi-times-circle', name: 'Benjamin King', status: 'Internal Error', date: new Date('2024-12-15'), amount: -100000 },
      { icon: 'pi pi-check-circle', name: 'Charlotte Perez', status: 'Complete', date: new Date('2024-12-16'), amount: 880000 },
      { icon: 'pi pi-exclamation-circle', name: 'Henry Lee', status: 'Pending', date: new Date('2024-12-17'), amount: 560000 },
      { icon: 'pi pi-times-circle', name: 'Amelia Wright', status: 'Error', date: new Date('2024-12-18'), amount: -200000 },
      { icon: 'pi pi-check-circle', name: 'Oliver Scott', status: 'Complete', date: new Date('2024-12-19'), amount: 720000 },
      { icon: 'pi pi-check-circle', name: 'Emily Green', status: 'Internal Error', date: new Date('2024-12-20'), amount: 540000 }
    ];
  }

  getStatusSeverity(status: string): { severity: 'success' | 'danger' | 'warning' | undefined, icon: string } {
    switch (status) {
      case 'Complete':
        return { severity: 'success', icon: 'pi pi-check-circle' };
      case 'Error':
        return { severity: 'danger', icon: 'pi pi-times-circle' };
      case 'Pending':
        return { severity: 'warning', icon: 'pi pi-exclamation-circle' };
      default:
        return { severity: undefined, icon: 'pi pi-question-circle' };
    }
  }
}
