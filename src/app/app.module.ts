import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterListComponent } from './counter-list/counter-list.component';
import { CounterDetailComponent } from './counter-detail/counter-detail.component';
import { SuperCounterComponent } from './super-counter/super-counter.component';
import { SuperCounterTwoComponent } from './super-counter-two/super-counter-two.component';
import { SuperCounterThreeComponent } from './super-counter-three/super-counter-three.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterListComponent,
    CounterDetailComponent,
    SuperCounterComponent,
    SuperCounterTwoComponent,
    SuperCounterThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
