import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule } from 'devextreme-angular';
import { Blueprint, Service } from './app.service';


@Component({
    styleUrls: ['./app.component.css'],
    selector: 'demo-app',
    templateUrl: './app.component.html',
    providers: [Service]
})
export class AppComponent {
    blueprints: Blueprint[];

    constructor(service: Service) {
        this.blueprints =  service.getBlueprints();
    }
}
