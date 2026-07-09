import { Routes } from "@angular/router";
import { HomePage } from "../pages/home-page/home-page";
import { ByCapitalPage } from "./pages/by-capital-page/by-capital-page";


export const countryRoutes: Routes = [
  {
    path: '',
    component: ByCapitalPage
  }
];

