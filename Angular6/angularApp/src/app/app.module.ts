//Modules
import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { FormsModule }            from '@angular/forms';
import { HttpModule }             from '@angular/http';
//Components
import { AppComponent }           from './app.component';
import { ServerComponent }        from './server/server.component';
import { ServersComponent }       from './servers/servers.component';
import { WarningAlertComponent }  from './warning-alert/warning-alert.component';
import { SuccessAlertComponent }  from './success-alert/success-alert.component';
import { AssignmentComponent } from './assignment/assignment.component' ;

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    AssignmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }