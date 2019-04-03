import { Injectable } from '@angular/core';
import { NUMBER_FORMAT_REGEXP } from '@angular/common/src/i18n/format_number';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
    getNews(value){
       let  tabNews =
       [
       {"num":1, "Title" : "LCL News" , "Contenue" : "fdsdrferfefefserser" },
       {"num":2, "Title" : "Le Monde" , "Contenue" : "fdsdrferfefefserser" },
       {"num":3, "Title" : "Le point" , "Contenue" : "fdsdrferfefefserser" },
       {"num":4, "Title" : "Le canard" , "Contenue" : "fdsdrferfefefserser" }

     ]

     return (tabNews)
  

    }
  constructor() { }
}
