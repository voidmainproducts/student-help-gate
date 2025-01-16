import {Component, OnInit} from '@angular/core';
// @ts-ignore
// import { ChartOptions, ChartType, Label } from 'chart.js';
// import {DataService} from "../../services/data-service/data.service";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export class ChartsComponent {
  //
  // public districtChartLabels: Label[] = [];
  // public districtChartData: number[] = [];
  // public districtChartType: ChartType = 'pie';
  //
  // public classChartLabels: Label[] = [];
  // public classChartData: number[] = [];
  // public classChartType: ChartType = 'pie';
  //
  // public subjectChartLabels: Label[] = [];
  // public subjectChartData: number[] = [];
  // public subjectChartType: ChartType = 'pie';
  //
  // public districtChartOptions: ChartOptions = {
  //   responsive: true,
  // };
  // public classChartOptions: ChartOptions = {
  //   responsive: true,
  // };
  // public subjectChartOptions: ChartOptions = {
  //   responsive: true,
  // };
  //
  // constructor(private dataService: DataService) { }
  //
  // ngOnInit() {
  //   this.dataService.getData().subscribe(data => {
  //     this.calculateDistrictData(data);
  //     this.calculateClassData(data);
  //     this.calculateSubjectData(data);
  //   });
  // }
  //
  // calculateDistrictData(data: any[]) {
  //   const districtCounts = {};
  //   data.forEach(item => {
  //     // @ts-ignore
  //     districtCounts[item.districtName] = (districtCounts[item.districtName] || 0) + 1;
  //   });
  //
  //   this.districtChartLabels = Object.keys(districtCounts);
  //   this.districtChartData = Object.values(districtCounts);
  // }
  //
  // calculateClassData(data: any[]) {
  //   const classCounts = {};
  //   data.forEach(item => {
  //     // @ts-ignore
  //     classCounts[item.className] = (classCounts[item.className] || 0) + 1;
  //   });
  //
  //   this.classChartLabels = Object.keys(classCounts);
  //   this.classChartData = Object.values(classCounts);
  // }
  //
  // calculateSubjectData(data: any[]) {
  //   const subjectCounts = {};
  //   data.forEach(item => {
  //     // @ts-ignore
  //     subjectCounts[item.subject] = (subjectCounts[item.subject] || 0) + 1;
  //   });
  //
  //   this.subjectChartLabels = Object.keys(subjectCounts);
  //   this.subjectChartData = Object.values(subjectCounts);
  // }
}
