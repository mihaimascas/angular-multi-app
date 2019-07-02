import { BrowserModule } from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAComponent } from './view-a/view-a.component';
import { ViewBComponent } from './view-b/view-b.component';
import { NavComponent } from './layout/nav/nav.component';
import { MainComponent } from './layout/main/main.component';
import { TestService } from './test.service';

const providers = [
  TestService
];

@NgModule({
  declarations: [
    AppComponent,
    ViewAComponent,
    ViewBComponent,
    MainComponent,
    NavComponent
  ],
  entryComponents: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [...providers],
  bootstrap: [AppComponent]
})
export class AppModule {}

@NgModule({})
export class App1SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: [...providers]
    };
  }
}

