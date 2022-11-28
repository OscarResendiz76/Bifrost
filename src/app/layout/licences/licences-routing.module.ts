import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicencesComponent } from './licences.component';

const routes: Routes = [
    {
        path: '',
        component: LicencesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LicencesRoutingModule {}
