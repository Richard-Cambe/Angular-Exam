import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@/components/header/header.component';
import { FooterComponent } from '@/components/footer/footer.component';
import { MainNavComponent } from '@/components/main-nav/main-nav.component';
import { ObservablesPreviewComponent } from './components/observable-preview/observable-preview.component';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    MainNavComponent,
    FooterComponent,
    ObservablesPreviewComponent,
    
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'angular-exam';

  ngOnInit(): void {
    
  }
}