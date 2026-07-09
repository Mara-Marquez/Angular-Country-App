import { Routes } from "@angular/router";
import { HomePage } from "../pages/home-page/home-page";
import { ByCapitalPage } from "./pages/by-capital-page/by-capital-page";
import { CountryLayout } from "./layouts/Country-layout/Country-layout";


export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children:[
      {path:'by-capital',component:ByCapitalPage},


      
      {path:'**',redirectTo:'by-capital'},
    ]
  }
];

