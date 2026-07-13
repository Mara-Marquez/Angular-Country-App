import { Component } from '@angular/core';
import { SearchInput } from '../../components/search-input/search-input';
import { CountryList } from '../../components/country-list/country-list';

@Component({
  selector: 'app-by-country',
  standalone: true,
  imports: [ SearchInput,CountryList ],
  templateUrl: './by-country.html',
})
export class ByCountry {}
