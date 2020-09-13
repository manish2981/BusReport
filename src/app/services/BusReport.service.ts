import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Report } from '../shared/Report';


@Injectable()
export class BusReportService {
   
    constructor(private http: HttpClient) { }

    getProductsWithOrdersSmall() {
        return this.http.get<any>('assets/bus-services-data.json')
        .toPromise()
        .then(res => <Report[]>res.data)
        .then(data => { return data; });
    }

    

}