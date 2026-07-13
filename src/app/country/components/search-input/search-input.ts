import { Component, EventEmitter, Output ,Input} from '@angular/core';


@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [],
  templateUrl: './search-input.html',
})
export class SearchInput {
  //Tarea
 // value=output<string>
 @Input()
 placeholder:string="";


  @Output()
  Search = new EventEmitter<string>();

  onChange(value:string){
   
    this.Search.emit(value);
  }

}
