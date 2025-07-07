import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 700,
    items: 1,
    autoplay: true,
    autoplayTimeout:3000
  }

  @ViewChild('imgContainer') imgContainer: ElementRef;

  projects = [
    {
      "Title": "Drilling & Blasting Management System",
      "Description": "Production-ready 4-layer <span class='underline'>Clean Architecture</span> solution built with <span class='underline'>ASP.NET&nbsp;Core&nbsp;8</span> backend and <span class='underline'>Angular&nbsp;17</span> SPA for drilling &amp; blasting operations management. Supports <span class='underline'>JWT authentication</span>, <span class='underline'>Entity&nbsp;Framework&nbsp;Core</span> data layer, layered DDD, and CI/CD ready.",
      "imgs": [
        "assets/images/Blasting Mode/Screenshot 2025-06-29 164840.png",
        "assets/images/Blasting Mode/Screenshot 2025-06-29 164918.png",
        "assets/images/Blasting Mode/Screenshot 2025-06-29 164953.png",
        "assets/images/Blasting Mode/Screenshot 2025-06-29 165007.png",
        "assets/images/Blasting Mode/Screenshot 2025-06-29 165021.png",
        "assets/images/Blasting Mode/Screenshot 2025-06-29 165046.png"
      ],
      "Technologies": ["ASP.NET Core 8", "Angular 17", "Clean Architecture", "EF Core", "SQL Server"]
    },
  ];

  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }

  debug(){
    this.imgContainer.nativeElement.scroll({
      top: this.imgContainer.nativeElement.scrollHeight,
      left: 0,
      behavior: 'smooth',    
    });
  }
}
