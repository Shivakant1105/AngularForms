import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading = false;

  constructor(private router: Router, ) {}

  ngOnInit() {
    // this.loadingService.loading$.subscribe((loading) => {
    //   this.loading = loading;
    // });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading=true 
       
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        // this.loadingService.hideAfterDelay(1000); // 10 seconds delay
        this.loading=false
      }
    });
  }
}