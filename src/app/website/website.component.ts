import { Component, OnInit } from '@angular/core';
import { PostserviceService } from '../core/servicios/postservice.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit{

  posts:any;


  constructor(public postService:PostserviceService) {
    

  }

  ngOnInit(): void {
    this.listarPost();
  }

  listarPost()
  {
    
    this.postService.listarPost().subscribe(data=>{

     this.posts=data;


    })

  }

}
