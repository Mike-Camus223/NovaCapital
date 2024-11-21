import { Component, AfterViewInit, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Chart, ChartOptions, ChartData } from 'chart.js';
import { ThemeService } from '../../../../core/services/Theme.service';
import { Subscription } from 'rxjs';
import { Stats } from '../../../../core/models/Stats.interface';

@Component({
  selector: 'app-dash-home',
  templateUrl: './dash-home.component.html',
  styleUrls: ['./dash-home.component.scss']
})
export class DashHomeComponent implements AfterViewInit, OnInit, OnDestroy {
  private Stats: Stats[] = [];
  private themeSubscription?: Subscription;
  highestIncome: number = 0;
  highestExpense: number = 0;

  public lineChartData: ChartData<'bar' | 'line'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        type: 'line',
        data: [200000, 300000, 220000, 500000, 250000, 400000, 230000, 320000, 210000, 350000, 620000, 790000],
        label: 'Expenses',
        backgroundColor: '#eb8ba3',
        borderColor: '#eb8ba3',
        stepped: true
      },
      {
        type: 'bar',
        data: [700000, 650000, 820000, 1000000, 800000, 850000, 300000, 450000, 300000, 400000, 800000, 1400000],
        label: 'Income',
        backgroundColor: '#8e42e6',
        borderColor: '#8e42e6',
        borderWidth: 1,
        barThickness: 33,
        maxBarThickness: 40,
      }
    ]
  };
  public lineChartOptions: ChartOptions<'bar' | 'line'> = this.createDefaultChartOptions();
  public lineChartType: 'bar' | 'line' = 'bar';

  public doughnutColors: string[] = [
    '#ff8ee3',
    '#968eff',
    '#fff48e',
    '#8eff97',
    '#acacac'
  ];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Food', 'Transport', 'Utilities', 'Entertainment', 'Other'],
    datasets: [
      {
        data: [300, 150, 100, 200, 40],
        backgroundColor: this.doughnutColors,
        borderColor: this.doughnutColors,
        borderWidth: 1
      }
    ]
  };

  public doughnutChartOptions: ChartOptions<'doughnut'> = this.createDefaultDoughnutOptions();
  public doughnutChartType: 'doughnut' = 'doughnut';

  public savingsChartData: ChartData<'line'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        data: [150000, 200000, 180000, 220000, 300000, 350000, 370000, 600000, 430000, 420000, 710000, 850000],
        label: 'Savings',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: 'origin',
      }
    ]
  };

  public savingsChartOptions: ChartOptions<'line'> = this.createDefaultChartOptions();
  public savingsChartType: 'line' = 'line';

  responsiveOptions = [
    { breakpoint: '1200px', numVisible: 3, numScroll: 3 },
    { breakpoint: '992px', numVisible: 2, numScroll: 2 },
    { breakpoint: '768px', numVisible: 1, numScroll: 1 },
    { breakpoint: '576px', numVisible: 1, numScroll: 1 }
  ];

  photoUser = [
    { photoIcon: 'assets/images/avatars/Person1.png', altPhotoUser: 'First Friend', draggable: false, name: 'Mauro', surname: 'Gomez' },
    { photoIcon: 'assets/images/avatars/Person3.png', altPhotoUser: 'First Friend', draggable: false, name: 'Juan', surname: 'Pérez' },
    { photoIcon: 'assets/images/avatars/Person2.png', altPhotoUser: 'Second Friend', draggable: false, name: 'Ana', surname: 'García' },
    { photoIcon: 'assets/images/avatars/Person5.png', altPhotoUser: 'Third Friend', draggable: false, name: 'Luis', surname: 'Benavidez' },
    { photoIcon: 'assets/images/avatars/Person6.png', altPhotoUser: 'Fourth Friend', draggable: false, name: 'Kasumi', surname: 'Okatsu' }
  ];

  SelectUserPhoto = this.photoUser[0];

  statsSystem: Stats[] = [
    {
      title: 'balance',
      value: 1400000,
      iconTitle: 'fa-solid fa-arrow-trend-up',
      avalible: 'Available',
      dataicon: 'pi pi-arrow-up',
      datavalue: 70.2,
    },
    {
      title: 'monthly Expenses',
      value: 55000,
      iconTitle: 'fa-solid fa-arrow-trend-down',
      avalible: 'Not available',
      dataicon: 'pi pi-arrow-down',
      datavalue: 4.4,
    },
    {
      title: 'monthly Savings',
      value: 450000,
      iconTitle: 'fa-solid fa-piggy-bank',
      avalible: 'Available',
      dataicon: 'pi pi-plus',
      datavalue: 20.2,
    }
  ];

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    if (!this.doughnutChartData?.labels) {
      this.doughnutChartData.labels = [];
    }
    const incomeData = this.lineChartData.datasets[1].data.filter(item => typeof item === 'number');
    this.highestIncome = Math.max(...incomeData) ?? 0;
    const expenseData = this.lineChartData.datasets[0].data.filter(item => typeof item === 'number');
    this.highestExpense = Math.max(...expenseData) ?? 0;
    this.themeSubscription = this.themeService.theme$.subscribe(theme => {
      this.applyThemeToCharts(theme);
    });
  }

  ngAfterViewInit() {
    this.updateChart();
  }

  ngOnDestroy() {
    this.themeSubscription?.unsubscribe();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateChart();
  }

  updateChart() {
    const chart = Chart.getChart("chartId");
    chart?.resize();
  }

  private applyThemeToCharts(theme: string) {
    const isDark = theme === 'lara-dark-blue';
    const textColor = isDark ? 'white' : 'black';
    const gridColor = isDark ? '#444' : '#ccc';

    this.lineChartOptions = this.createDefaultChartOptions(textColor, gridColor);
    this.doughnutChartOptions = this.createDefaultDoughnutOptions(textColor);
    this.savingsChartOptions = this.createDefaultChartOptions(textColor, gridColor);
  }

  IconDataColors(index: number, type: string) {
    switch (type) {
      case 'IconColor':
        switch (index) {
          case 0:
            return {
              'text-teal-500': true,
              'text-shadow': true,
            };
          case 1:
            return {
              'text-red-500': true,
              'text-shadow-red': true,
            };
          case 2:
            return {
              'text-cyan-300': true,
              'text-shadow-skyblue': true,
            };
          default:
            return {};
        }

      case 'BgClass':
        switch (index) {
          case 0:
            return {
              'bg-teal-500': true,
              'neon-bg': true,
            };
          case 1:
            return {
              'bg-red-500': true,
              'neon-bg-red': true,
            };
          case 2:
            return {
              'bg-cyan-300': true,
              'neon-bg-skyblue': true,
            };
          default:
            return {};
        }
      default:
        return {};
    }
  }

  private createDefaultChartOptions(textColor = 'black', gridColor = '#ccc'): ChartOptions<'line' | 'bar'> {
    return {
      responsive: true,
      interaction: { mode: 'index', intersect: false },
      scales: {
        y: {
          beginAtZero: true,
          min: 0,
          max: 1500000,
          ticks: {
            color: textColor,
            stepSize: 250000
          },
          grid: { display: false }
        },
        x: {
          ticks: { color: textColor },
          grid: { display: false }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (context) => `${context.label} ${new Date().getFullYear()}: $${context.raw} (${context.dataset.label})`
          },
          titleColor: 'white',
          bodyColor: 'white'
        },
        legend: {
          labels: { color: textColor, font: { size: 15 } },
          align: 'end',
        }
      },
      layout: {
        padding: {
          top: 10,
        }
      }
    };
  }


  private createDefaultDoughnutOptions(textColor = 'black'): ChartOptions<'doughnut'> {
    return {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 1.5,
      radius: 125,
      cutout: '50%',
      plugins: {
        tooltip: {
          callbacks: { label: (context) => `${context.label}: $${context.raw}` },
          titleColor: 'white',
          bodyColor: 'white'
        },
        legend: {
          display: true,
          position: 'top',
          labels: { color: textColor, font: { size: 15 } }
        }
      },
      layout: {
        padding: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      }
    };
  }
}
