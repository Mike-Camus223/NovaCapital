import { Component, Input, input, OnInit } from '@angular/core';
import { DataGeneralService } from '../../../../core/services/data-general.service';
import { PageDoubleDataInter } from '../../../../core/models/doblePage.interface';

@Component({
  selector: 'app-doblepage',
  templateUrl: './doblepage.component.html',
  styleUrl: './doblepage.component.scss'
})
export class DoblepageComponent implements OnInit {
  @Input() ShowPage: 'PageDouble1' | 'PageDouble2' | 'PageDouble3' | null = null;
  generalDoubleData: PageDoubleDataInter[] = [];

  constructor(private dataPageDouble: DataGeneralService) {}

  ngOnInit() {
    if (this.ShowPage) {
      this.generalDoubleData = this.dataPageDouble.dataPageDouble.filter(
        item => item.pages.pagesDouble === this.ShowPage
      );
    }
  }
}
