import { Component, OnInit } from '@angular/core';

import { Commodity } from '../../models/commodity';
import { CommodityService } from '../../services/commodities.service';

@Component({
    selector: 'commodities',
    templateUrl: './commodities.component.html',
    styleUrls: ['./commodities.component.css']
})

export class CommoditiesComponent implements OnInit {
    commodities: Commodity[];

    constructor(private commodityService: CommodityService) { }

    ngOnInit(): void {
        this.getCommodities();
    }

    getCommodities(): void {
        this.commodityService.getCommodities()
            .subscribe(commodities => {
                console.log(commodities);
            });
    }

}