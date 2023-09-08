import { Component } from '@angular/core';
import { AgChartOptions } from 'ag-charts-community';
import { getData } from './data';

@Component({
  selector: 'my-app',
  template: `<ag-charts-angular
    style="height: 100%"
    [options]="options"
  ></ag-charts-angular> `,
  standalone: true
})
export class HistPlot {
  public options: AgChartOptions;

  constructor() {
    this.options = {
      title: {
        text: 'Race demographics',
      },
      data: getData(),
      series: [
        {
          type: 'histogram',
          xKey: 'age',
          xName: 'Participant Age',
        },
      ],
      axes: [
        {
          type: 'number',
          position: 'bottom',
          title: { text: 'Age band (years)' },
          tick: { interval: 4 },
        },
        {
          type: 'number',
          position: 'left',
          title: { text: 'Number of participants' },
        },
      ],
    };
  }

  ngOnInit() {}
}
