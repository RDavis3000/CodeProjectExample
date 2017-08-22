import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { KnobComponent } from './components/knob.component';
import { UserComponent } from './components/user.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'knob', component: KnobComponent },
    { path: 'user', component: UserComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);