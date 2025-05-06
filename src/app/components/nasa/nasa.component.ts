import { Component, OnInit, inject, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '@/services/api.service';


@Component({
  selector: 'app-nasa',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './nasa.component.html',
  styleUrl: './nasa.component.css'
})

export class NasaComponent implements OnInit {
  private apiService = inject(ApiService);
  nasaData: WritableSignal<any> = signal(undefined);

  ngOnInit(): void {
    this.apiService.getNasaPic().subscribe({
      next: (data: any) => this.nasaData.set(data),
      error: () => console.error("J'ai pas la photo")
    })
  }
}
