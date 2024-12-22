import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { DepositeComponent } from './components/deposite/deposite.component';
import { SendComponent } from './components/send/send.component';

export const routes: Routes = [
    {path:'', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'edit/profile', component: EditProfileComponent},
    {path: 'transaction/history', component: TransactionHistoryComponent},
    {path: 'money/deposite', component: DepositeComponent},
    {path: 'money/send', component: SendComponent},
    
];
