import {Injectable} from '@angular/core';
import {of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {LoadingService} from "../loading/loading.service";
import {JsonCombinerService} from "../json-combiner-service/json-combiner.service";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    data: any[] = [];
    private dataURL = "/assets/data.json"
    private dataPathsUrl = "/assets/dataPath.json"
    isLoaded: boolean = false;

    constructor(private http: HttpClient,
                private loadingService: LoadingService,
                private jsonCombinerService: JsonCombinerService
    ) {}

    getData() {
        let promise = new Promise<any>((resolve, reject) => {
            if(this.isLoaded) {
                resolve(this.data);
            }
            else {
                this.http.get<any[]>(this.dataURL).subscribe(data => {
                    this.data = data;
                    this.data.sort((a: any, b: any) => a.rollNo - b.rollNo)
                    this.isLoaded = true;
                    resolve(this.data);
                }, error => {
                    console.log(error);
                    this.isLoaded = false;
                    resolve(this.data);
                });
            }
        });
        return promise;
    }

    getDataV2() {
        let promise = new Promise<any>((resolve, reject) => {
            if(this.isLoaded) {
                resolve(this.data);
            }
            else {
                this.http.get<string[]>(this.dataPathsUrl).subscribe((fileList) => {
                    fileList = fileList.map(f => "/assets/allocation-jsons/"+f);
                    this.jsonCombinerService.combineJsonFiles(fileList).subscribe(data => {
                        this.data = data;
                        this.isLoaded = true;
                        resolve(this.data);
                    }, error => {
                        console.log(error);
                        this.isLoaded = false;
                        resolve(this.data);
                    });
                });

            }
        });
        return promise;
    }
}
