import { BrowserModule } from '@angular/platform-browser';
import {appRoutes} from './app.routes'
import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import * as components from './components/index';
import * as services from './services/index';


@NgModule({
  declarations: [
    AppComponent,
    components.HomeComponent,
    components.JobsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
        appRoutes,
        {enableTracing: true} // <-- debugging purposes only
    ),
  ],
  providers: [
      services.AuthService,
      services.UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
