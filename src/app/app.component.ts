import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  public lastTemperatureS1: number;
  public last10temperatureS1: Array<number>;

  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';
  // lineChart
  public lineChartData: Array<any>;

  public lineChartLabels: Array<any> = ['#1', '#2', '#3', '#4', '#5', '#6', '#7','#8','#9','#10'];
  public lineChartOptions: any = {
    animation: false,
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  temperatureS1: FirebaseListObservable<any[]>;
  
  constructor(af: AngularFire) {
    this.last10temperatureS1 = new Array<number>();
    this.temperatureS1 = af.database.list('temperatureS1', {
      preserveSnapshot: true,
      query: {
        limitToLast: 10,
        orderByKey: true
      }
    });

    this.temperatureS1.subscribe(items =>{
      this.last10temperatureS1.splice(0);

      items.forEach(item =>{
        this.last10temperatureS1.push(item.val())
      });
      
    this.lineChartData = [
      { data: this.last10temperatureS1, label: 'Sonde 1' },
    ];

      this.lastTemperatureS1 = this.last10temperatureS1[this.last10temperatureS1.length-1];
    });
    

    this.lineChartData = [
      { data: this.last10temperatureS1, label: 'Sonde 1' }
      //{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
      //{ data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
    ];

  


  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
