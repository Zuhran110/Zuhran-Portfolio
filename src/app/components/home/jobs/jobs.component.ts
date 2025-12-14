import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  
  active = 0;
  
  jobs = [
    {
      "Tab": "Affotax",
      "Title": "Full Stack Developer Intern",
      "Date": "2025 - Present",
      "Description": [
        "Full Stack MERN Developer with expertise in building scalable web applications using MongoDB, Express.js, React, and Node.js",
        "Recently transitioned from software engineering graduate to professional developer",
        "Currently developing enterprise-level applications from ground up including the Outsource Accounting platform",
        "Implementing best practices in scalable design and software architecture",
        "Working on real-world project implementation with JavaScript and SQL-based Web apps"
      ]
    }
  ];
  
  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }

}
