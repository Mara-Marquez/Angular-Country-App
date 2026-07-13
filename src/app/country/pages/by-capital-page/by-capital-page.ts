import { Component, Input } from '@angular/core';
import { SearchInput } from '../../components/search-input/search-input';
import { CountryList } from '../../components/country-list/country-list';


@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.html',
  standalone: true, // Debe ser standalone
  imports: [SearchInput,CountryList],
 

})
export class ByCapitalPage {


 constructor() {
    console.log('ByCapitalPage cargado');
  }
  
  // @Input()
 // search: string="";
search: string = "";
  Imprimir(){
    console.log(this.search);
  }
}

