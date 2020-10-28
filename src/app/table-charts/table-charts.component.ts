import { AfterViewChecked, AfterViewInit, Component } from '@angular/core';
import * as d3 from 'd3';
import * as c3 from 'c3';

const data = [
  { name: 'Ümumi', value: 1000 },
  { name: 'Son tarix ilə', value: 600 },
  { name: 'Son tarixsiz', value: 350 },
  { name: 'Davamlı', value: 50 },
];

@Component({
  selector: 'app-table-charts',
  templateUrl: './table-charts.component.html',
  styleUrls: ['./table-charts.component.scss'],
})
export class TableChartsComponent implements AfterViewInit, AfterViewChecked {
  data: any[] = data;

  ellipses: any[] = [
    { bg: '#009237', count: 735, color: 'white' },
    { bg: '#FDC200', count: 125, color: 'white' },
    { bg: '#C10000', count: 50, color: 'white' },
    { bg: '#E7E7E7', count: 90, color: 'black' },
  ];

  continuous: number[] = [5, 15, 20, 10];
  withoutDeadline: number[] = [200, 70, 10, 70];

  view: any[] = [150, 520];
  colorScheme = {
    domain: ['#5976B0'],
  };

  getChartObject = (json, title, bindto) => {
    return {
      bindto,
      size: {
        height: 120,
        width: 120,
      },
      data: {
        json,
        type: 'donut',
      },
      legend: {
        show: false,
      },
      donut: {
        title,
        width: 30,
        label: {
          format: (value) => value,
        },
      },
      tooltip: {
        show: false,
      },
      color: {
        pattern: ['#1F4385', '#5579AC', '#1AC9FF'],
      },
    };
  };

  ngAfterViewInit(): void {
    c3.generate(
      this.getChartObject(
        [
          ['data1', 480],
          ['data2', 40],
          ['data3', 10],
        ],
        '530',
        '#chart1'
      )
    );
    c3.generate(
      this.getChartObject(
        [
          ['data1', 5],
          ['data2', 15],
          ['data2', 20],
        ],
        '40',
        '#chart2'
      )
    );
    c3.generate(
      this.getChartObject(
        [
          ['data1', 0],
          ['data2', 15],
          ['data3', 5],
        ],
        '20',
        '#chart3'
      )
    );
    c3.generate(
      this.getChartObject(
        [
          ['data1', 0],
          ['data2', 0],
          ['data3', 10],
        ],
        '10',
        '#chart4'
      )
    );
  }

  ngAfterViewChecked(): void {
    this.centerDonutTexts();
  }

  centerDonutTexts() {
    d3.selectAll('.c3-chart-arc>text').attr('transform', function (d, i) {
      var r = 35, //<-- adjust this to move the labels
        a = (d.startAngle + d.endAngle) / 2 - Math.PI / 2;
      // compute the new centroid
      return 'translate(' + Math.cos(a) * r + ',' + Math.sin(a) * r + ')';
    });
  }
}
