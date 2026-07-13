import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenu } from '../../components/top-menu/top-menu';
@Component({
  selector: 'app-country-layout',
 standalone: true,
  imports: [RouterOutlet,TopMenu],
  templateUrl: './Country-layout.html',
})
export class CountryLayout {}
