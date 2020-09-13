import { Component } from '@angular/core';
import { trigger,state,style,transition,animate } from '@angular/animations';
import { Report } from './shared/Report';
import { BusReportService } from './services/BusReport.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
      trigger('rowExpansionTrigger', [
          state('void', style({
              transform: 'translateX(-10%)',
              opacity: 0
          })),
          state('active', style({
              transform: 'translateX(0)',
              opacity: 1
          })),
          transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
      ])
  ]
})

export class AppComponent { 
  reports: Report[];

  constructor(private busReportService: BusReportService) { }

  ngOnInit() {
      this.busReportService.getReport().then(data => this.reports = data);
  }

  renderStatusClass(v1:number){
      if(v1<0){
          return "p-tag p-tag-rounded p-tag-danger";
      } else if(v1>0 && v1<300){
        return "p-tag p-tag-rounded p-tag-success";
      } else if (v1>300){
        return "p-tag p-tag-rounded p-tag-primary";
      } else{
        return "p-tag p-tag-rounded p-tag-warning";
      }
  }

 

  
}

