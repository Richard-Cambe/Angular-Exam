import { Component, OnInit, inject, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '@/services/api.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-nasa',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './nasa.component.html',
  styleUrl: './nasa.component.css'
})

export class NasaComponent implements OnInit {
  safeUrl?: SafeResourceUrl;
  //private apiService = inject(ApiService);
  nasaData: WritableSignal<any> = signal(undefined);

  constructor(private apiService:ApiService, private sanitizer:DomSanitizer){}

  ngOnInit(): void {
    this.apiService.getNasaPic().subscribe({
      next: (data) => {
        if(data.media_type === "video" && data.url.includes('youtube.com')) {
          const videoId = new URL(data.url).searchParams.get('v')
          if(videoId){
            const embedUrl = `https://www.youtube.com/embed/${videoId}`
            this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl)
          }
        }
      },
      error: () => console.error("J'ai pas la photo")
    })
  }
}
