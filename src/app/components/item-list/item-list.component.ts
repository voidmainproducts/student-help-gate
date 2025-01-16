import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VisitorTrackingService } from '../../services/visitor-tracking.service';
import {LoadingService} from "../../services/loading/loading.service";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  items: any[] = [];
  filteredItems: any[] = [];
  classes: string[] = [];
  subjects: string[] = [];
  districts: string[] = [];
  selectedClass = 'all';
  selectedSubject = 'all';
  selectedDistrict = 'all';
  searchTerm = '';
  visitorCount = 0;
  dataURL = '/assets/data.json';
  fullData:any = [];
  p=1;
  itemPerPage: number = 20;

  constructor(
    private http: HttpClient,
    private visitorService: VisitorTrackingService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.visitorService.incrementVisitor();
    this.visitorCount = this.visitorService.getVisitorCount();

    this.loadingService.show();

    this.http.get<any[]>(this.dataURL).subscribe((data) => {
      this.items = data;
      this.filteredItems = data;
      this.updateDropdowns();
      this.loadingService.hide();
    }, error => {
      console.error(error);
      this.loadingService.hide();
    });
  }

  updateDropdowns(): void {
    this.classes = Array.from(new Set(this.items.map((item) => item.class)));
    this.subjects = this.selectedClass !== 'all'
      ? Array.from(
        new Set(this.items
          .filter((item) => item.class === this.selectedClass)
          .map((item) => item.subject))
      )
      : Array.from(
        new Set(this.items
          .map((item) => item.subject))
      );

    this.subjects.sort();

    this.districts = this.selectedSubject !== 'all'
      ? Array.from(
        new Set(this.items
          .filter((item) => item.subject === this.selectedSubject)
          .map((item) => item.districtName))
      )
      : Array.from(
        new Set(this.items
          .map((item) => item.districtName))
      );
    this.districts = this.districts.filter(d => !!d);
    this.districts.sort();
  }

  filterItems(): void {
    this.filteredItems = this.items.filter((item) => {
      const matchesFilters =
        (this.selectedClass === 'all' || item.class === this.selectedClass) &&
        (this.selectedSubject === 'all' || item.subject === this.selectedSubject) &&
        (this.selectedDistrict === 'all' || item.districtName === this.selectedDistrict);

      const matchesSearch =
        Object.values(item)
          .join(' ')
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
      return matchesFilters && matchesSearch;
    });

    this.updateDropdowns();
    this.p =1;
  }

  resetFilters() {
    this.selectedClass = "all";
    this.selectedSubject = "all";
    this.selectedDistrict = "all";
    this.searchTerm = '';
    this.filteredItems = this.items;
  }
}
