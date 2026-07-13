import { Routes } from "@angular/router";
import { HomePage } from "../pages/home-page/home-page";
import { ByCapitalPage } from "./pages/by-capital-page/by-capital-page";
import { CountryLayout } from "./layouts/Country-layout/Country-layout";
import { ByCountry } from "./pages/by-country-page/by-country";
import { ByRegionPage } from "./pages/by-region-page/by-region-page";
import { CountryPage } from "./pages/Country-page/Country-page";

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children:[
      {path:'by-capital',component:ByCapitalPage},
      
       {path:'by-country',component:ByCountry},
        {path:'by-region',component:ByRegionPage},
        {path:'by/:code',component:CountryPage},


      
      {path:'**',redirectTo:'by-capital'},
    ]
  }
];

