import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-more-proyects',
  templateUrl: './more-proyects.component.html',
  styleUrls: ['./more-proyects.component.scss']
})
export class MoreProyectsComponent implements OnInit {

  otherProjects = [
    {
      "Title": "Unity Game Development Project",
      "Description": "3D game development project built with Unity Engine. Features custom shaders, advanced graphics programming, and interactive gameplay mechanics using C# scripting.",
      "demoLink": "https://github.com/Zuhran110/GameProgramming-project",
      "ghLink": "https://github.com/Zuhran110/GameProgramming-project",
      "Technologies": ["Unity", "C#", "ShaderLab", "HLSL"]
    }
  ];

  constructor(
    private router: Router,
    public analyticsService: AnalyticsService
    ) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }
    redirect(route: string, event) {
      const id = event.target.id;
      if(id=='demoLink' || id=='ghLink'){
        return
      }
      window.open(route, '_blank');
    }

}
