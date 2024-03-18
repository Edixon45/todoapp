import { Routes } from '@angular/router';

import {HomeComponent} from './peges/home/home.component';
import {LabsComponent} from './peges/labs/labs.component'
export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },

    {
        path: 'last',
        component: LabsComponent
    }
];

