import { Component, OnInit } from '@angular/core';
import { DataSectionsService } from '../../../../core/services/data-sections.service';
import { SectionHelp } from '../../../../core/models/dataSec.interface';

@Component({
  selector: 'app-section-help',
  templateUrl: './section-help.component.html',
  styleUrl: './section-help.component.scss'
})
export class SectionHelpComponent implements OnInit{

  DataSection: SectionHelp[] = []; 

  constructor ( private DataSec: DataSectionsService) {}


  ngOnInit() {
    this.DataSection = this.DataSec.DataofSectionHelp;
  }
  
}
