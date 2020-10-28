import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskTypesComponent } from './task-types/task-types.component';
import { GeneralComponent } from './general/general.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TableChartsComponent } from './table-charts/table-charts.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskTypesComponent,
    GeneralComponent,
    TableChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
