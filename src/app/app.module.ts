import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IdolsListComponent } from './idols-list/idols-list.component';
import { IdolCardComponent } from './idol-card/idol-card.component';
import { IdolCardImageComponent } from './idol-card/idol-card-image.component';
import { IdolCardInfomationComponent } from './idol-card/idol-card-infomation.component';
import { IdolCardCompanyComponent } from './idol-card/idol-card-company.component';

@NgModule({
  declarations: [
    AppComponent,
    IdolsListComponent,
    IdolCardComponent,
    IdolCardImageComponent,
    IdolCardInfomationComponent,
    IdolCardCompanyComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
