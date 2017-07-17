import {
    BrowserModule
} from '@angular/platform-browser';
import {
    NgModule
} from '@angular/core';
import {
    BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdCardModule,
    MdSidenavModule,
    MdIconModule,
    MdMenuModule,
    MdListModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdGridListModule
} from '@angular/material';
import {
    AppComponent
} from './app.component';
import {
    LoginComponent
} from './modules/login/login.component';
import {
    MainComponent
} from './modules/main/main.component';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';
import {
    HttpModule,
    Http,
    XHRBackend,
    RequestOptions
} from '@angular/http';
import {
    RouterModule
} from '@angular/router';
import {
    LoginService
} from './services/login.service';
import {
    routes
} from './app.routes';
import {
    MainService
} from './services/main.service';
import {
    httpFactory
} from './services/http.factory';
import {
    InterceptedHttp
} from './services/http.interceptor';
import {
    FlexLayoutModule
} from "@angular/flex-layout";
import {
    HeadbarComponent
} from './modules/main/headbar/headbar.component';
import {
    DashboardComponent
} from './modules/main/dashboard/dashboard.component';
import {
    AddcustomerComponent
} from './modules/main/addcustomer/addcustomer.component';
import {
    RenewMembershipComponent
} from './modules/main/renew-membership/renew-membership.component';
import {
    SettingComponent
} from './modules/main/setting/setting.component';
import {
    ReminderComponent
} from './modules/main/reminder/reminder.component';
import {
    PrintInvoiceComponent
} from './modules/main/print-invoice/print-invoice.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        MainComponent,
        HeadbarComponent,
        DashboardComponent,
        AddcustomerComponent,
        RenewMembershipComponent,
        SettingComponent,
        ReminderComponent,
        PrintInvoiceComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdCheckboxModule,
        MdInputModule,
        MdCardModule,
        MdSidenavModule,
        MdIconModule,
        FlexLayoutModule,
        MdMenuModule,
        MdListModule,
        MdDatepickerModule, 
        MdNativeDateModule,
        MdGridListModule,
        RouterModule.forRoot(routes, {
            useHash: true
        }),
        FormsModule,
        HttpModule,
        ReactiveFormsModule
    ],
    providers: [
        LoginService,
        MainService,
        {
            provide: InterceptedHttp,
            useFactory: httpFactory,
            deps: [XHRBackend, RequestOptions]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}