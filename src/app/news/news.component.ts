import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
public numN : number;
public newsDemande = [];
public displayBlock=false;

public errorMsg : string;

public GettingNews(value){
  
  this._mesNews.getNews(value).subscribe(data => this.newsDemande=data,
                                         error => this.errorMsg=error)
  this.displayBlock=true;
 
  } 
  



  constructor(private  _mesNews : NewsService) { }

  ngOnInit() {
     
  }

}
