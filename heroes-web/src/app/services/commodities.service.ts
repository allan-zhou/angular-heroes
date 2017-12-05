import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Commodity } from '../models/commodity';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class CommodityService {
    private commoditiesUrl = 'http://192.168.1.217:3000/api/commodities';

    constructor(
        private http: HttpClient
    ) { }

    getCommodities(): Observable<Commodity[]> {
        return this.http.get<Commodity[]>(this.commoditiesUrl);
    }

    getCommodity(id: number): Observable<Commodity> {
        const url = `${this.commoditiesUrl}/${id}`;
        return this.http.get<Commodity>(url);
    }

    //////// Save methods //////////

    /** POST: add a new commodity to the server */
    addCommodity(commodity: Commodity): Observable<Commodity> {
        return this.http.post<Commodity>(this.commoditiesUrl, commodity, httpOptions);
    }

    /** DELETE: delete the commodity from the server */
    deleteCommodity(commodity: Commodity | number): Observable<Commodity> {
        const id = typeof commodity === 'number' ? commodity : commodity.id;
        const url = `${this.commoditiesUrl}/${id}`;

        return this.http.delete<Commodity>(url, httpOptions);
    }

    /** PUT: update the commodity on the server */
    updateCommodity(commodity: Commodity): Observable<any> {
        const id = typeof commodity === 'number' ? commodity : commodity.id;
        const url = `${this.commoditiesUrl}/${id}`;
        return this.http.put(url, commodity, httpOptions);
    }
}