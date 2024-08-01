import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { LoadingService } from './loader/loader-spinner/loading.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading = false;

  constructor(private router: Router, private loadingService: LoadingService) {}

  ngOnInit() {
    this.loadingService.loading$.subscribe((loading) => {
      this.loading = loading;
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log('NavigationStart');
        this.loadingService.show();
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        console.log('NavigationEnd or Cancel or Error');
        this.loadingService.hide();
      }
    });
    this.loadingService.loading$.subscribe((loading) => {
      console.log('Loading state:', loading);
      this.loading = loading;
    });
  }
  
}