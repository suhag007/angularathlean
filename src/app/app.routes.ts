import { Route } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { MainComponent } from './modules/main/main.component';

import { HeadbarComponent } from './modules/main/headbar/headbar.component';
import { DashboardComponent } from './modules/main/dashboard/dashboard.component';
import { AddcustomerComponent } from './modules/main/addcustomer/addcustomer.component';
import { RenewMembershipComponent } from './modules/main/renew-membership/renew-membership.component';
import { SettingComponent } from './modules/main/setting/setting.component';
import { ReminderComponent } from './modules/main/reminder/reminder.component';
import { PrintInvoiceComponent } from './modules/main/print-invoice/print-invoice.component';

export const routes: Route[] = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'main',
        component: MainComponent,
        children: [{
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full'
        },
        {
            path: 'dashboard',
            component: DashboardComponent
        },
        {
            path: 'add',
            component: AddcustomerComponent
        },
        {
            path: 'renew',
            component: RenewMembershipComponent
        },
        {
            path: 'reminder',
            component: ReminderComponent
        },
        {
            path: 'invoice',
            component: PrintInvoiceComponent
        },
        {
            path: 'setting',
            component: SettingComponent
        }]
    }
];