import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'servers',
                loadChildren: () => import('./servers/servers.module').then(m => m.ServersModule)
            },
            {
                path: 'licences',
                loadChildren: () => import('./licences/licences.module').then(m => m.LicencesModule)
            },
            {
                path: 'test',
                loadChildren: () => import('./test/test.module').then(m => m.TestModule)
            },
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule { }
