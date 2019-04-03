import { Injectable } from '@angular/core';
import { NUMBER_FORMAT_REGEXP } from '@angular/common/src/i18n/format_number';
import { HttpClient } from '@angular/common/http';
import { INews } from 'src/assets/news';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private _urlProvisoire="./assets/data/news.json"
  
    getNews(value) : Observable<INews[]>{
      
      return this.http.get<INews[]>(this._urlProvisoire);


      /*
      let  tabNews =
       [
       {"num":1, "Title" : "LCL News" , "Contenue" : "fdsdrferfefefserser" },
       {"num":2, "Title" : "Le Monde" , "Contenue" : "fdsdrferfefefserser" },
       {"num":3, "Title" : "Le point" , "Contenue" : "fdsdrferfefefserser" },
       {"num":4, "Title" : "Le canard" , "Contenue" : "fdsdrferfefefserser" }

     ]

     return (tabNews)
     */

    }
  constructor(private http : HttpClient) { }
}
