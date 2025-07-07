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
      "Tab": "Global",
      "Title": "Fullstack Developer",
      "Date": "May 2023",
      "Description": [
        "Leader in technical decision making",
        "Hiring technical talent for the company",
        "Team leader of the technology department",
        "Creation and maintenance of an internal process management platform for course sales",
        "Programming custom functions and plugins for customizing a WordPress platform",
        "Implementation of continuous integration and daily backups.",
        "Planning and reporting meetings."
      ]
    },
    {
      "Tab": "Proyex",
      "Title": "Fullstack Developer",
      "Date": "December 2019 - May 2023",
      "Description": [
        "Creation and maintenance of a monitoring platform with charts in WordPress.",
        "Functional programming in templates and plugins to add necessary monitoring features.",
        "Implementation of continuous integration and daily backups.",
        "Creation and maintenance of a second Monitoring Platform made with Angular, Angular Material, Laravel, MySQL, RxJS, Sass with configurable charts, alarm systems, and user management and general configuration settings.",
        "Planning and reporting meetings."
      ]
    },
    {
      "Tab": "Freelancer",
      "Title": "Freelancer",
      "Date": "May 2016 - Present",
      "Description": [
        "Continuous improvements implementation, working on frontend and backend.",
        "Creation of platforms with Angular, Laravel, WordPress programmed with functional, reactive, and object-oriented programming paradigms.",
        "Process automation with data structures.",
        "Template designs with SASS, Bootstrap, Materialize, Bulma, etc."
      ]
    },
    {
      "Tab": "Moebius",
      "Title": "Fullstack Developer",
      "Date": "July 2017 - October 2018",
      "Description": [
        "Leading a team of 4 people in the development of a tourism data management platform made in Angular, Laravel, and MySQL.",
        "Implementation of CI/CD in Azure. Refactoring and optimizing application load times.",
        "Coding API requests with RxJS.",
        "Creating modules with complex reactive forms.",
        "Writing weekly reports about goals and plans."
      ]
    },
    {
      "Tab": "TechLatam",
      "Title": "Backend Developer",
      "Date": "February 2016 - May 2017",
      "Description": [
        "Creating WordPress templates with ACF, functional programming in JavaScript/jQuery, styles in SASS.",
        "Integrating design and load time improvements for templates.",
        "Effective communication with the design team, working with Avocode/Figma."
      ]
    },
    {
      "Tab": "CANTV",
      "Title": "Systems Analyst",
      "Date": "November 2015 - December 2016",
      "Description": [
        "Programming new functionalities for an existing employee management platform made with Angular and ExpressJS.",
        "Refactoring old code. Ensuring compatibility of each dependency with each update, including regular Angular updates."
      ]
    },
    {
      "Tab": "IEP",
      "Title": "English Teacher",
      "Date": "January 2015 - July 2015",
      "Description": [
        "Teaching basic English to a student body of over 200 students."
      ]
    }
  ];
  
  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }

}
