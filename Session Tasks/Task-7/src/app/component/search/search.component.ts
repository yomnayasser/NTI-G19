import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  arraySearch:any
  names :any[] = [
    {
      "name":"yomna"
    },
    {
      "name":"yara"
    },
    {
      "name":"yasser"
    },
    {
      "name":"ahmed"
    }
    ]
  constructor() { }

  ngOnInit(): void {
  }
filerArray(input:any){
  this.arraySearch=this.names.filter(n=>{
    const name=n.name.includes(input.value)
    return name
  } )
  console.log(this.arraySearch)
  // console.log(input.value)
}
}
