import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{HomePage}from 'src/app/pages/home-page/home-page'
import { ByCapitalPage } from './country/pages/by-capital-page/by-capital-page';


const routes: Routes = [
  { path: '', component: HomePage },
/*
//asi deberia de ser pero pos no funciona 
  {
    path: 'country',
    loadChildren: () =>
      import('./country/country.routes')
        .then(m => m.countryRoutes)
  },
  */
 {path:'countrySA', 
 loadChildren: () =>
    import('./country/country.routes')
      .then(m => m.countryRoutes)
},
  //{ path: 'country', component: ByCapitalPage },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
