import { Component, Input, OnInit } from '@angular/core';
import { DataGeneralService } from '../../../../core/services/data-general.service';
import { PageTripleDataInter } from '../../../../core/models/doblePage.interface';

@Component({
  selector: 'app-triple-page',
  templateUrl: './triple-page.component.html',
  styleUrls: ['./triple-page.component.scss']
})
export class TriplePageComponent implements OnInit {
  @Input() ShowTriplePage: ('PageTriple1' | 'PageTriple2')[] = [];

  dataPageTripleGrouped: { [key: string]: PageTripleDataInter[] } = {};
  responsiveOptions: any[] = [];

  constructor(private DataTriple: DataGeneralService) {}

  ngOnInit() {
    this.ShowTriplePage.forEach(page => {
      this.dataPageTripleGrouped[page] = this.DataTriple.dataPageTriple.filter(
        item => item.pages.pagesTriple === page
      );
    });

    this.responsiveOptions = [
      { breakpoint: '1024px', numVisible: 3, numScroll: 1 },
      { breakpoint: '991px', numVisible: 2, numScroll: 1 },
      { breakpoint: '600px', numVisible: 1, numScroll: 1 }
    ];
  }
}
