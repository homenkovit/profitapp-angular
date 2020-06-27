import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/pages/home/home.component';
import { HeaderComponent } from '@src/app/components/header/header.component';
import { WorkCardComponent } from '@src/app/components/work-card/work-card.component';
import { WorksListComponent } from '@src/app/components/works-list/works-list.component';
import { WorksFilterComponent } from '@src/app/components/works-filter/works-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    WorkCardComponent,
    WorksListComponent,
    WorksFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
