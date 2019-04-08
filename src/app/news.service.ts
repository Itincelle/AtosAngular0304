import { Injectable } from '@angular/core';
import { NUMBER_FORMAT_REGEXP } from '@angular/common/src/i18n/format_number';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { INews } from 'src/assets/news';
import { Observable, throwError } from 'rxjs';

 
import { catchError } from 'rxjs/operators'﻿
import { errorHandler } from '@angular/platform-browser/src/browser';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  //private _urlProvisoire="./assets/data/news.json"
  //public _urlProvisoire="http://localhost:8282/news/1" //prb proxy on modify ce lien dur par un autre relatif et on rajoute proxy regarde son dernier push git le 18...mais moi je prefere comme l indien directe
    public _urlProvisoire='/news/'
    getNews(value) : Observable<INews[]>{
      let _url=this._urlProvisoire+value;
      return this.http.get<INews[]>(_url)
                   .pipe(catchError(this.errorHandler));


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

  errorHandler(error : HttpErrorResponse){

    return throwError(error.message || "Server Error")
  
  
  }
}

