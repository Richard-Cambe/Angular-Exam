import { RickMortyI } from '@/interfaces/rick.interface';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@/services/api.service';

@Component({
  selector: 'app-rick-details',
  imports: [CommonModule],
  templateUrl: './rick-details.component.html',
  styleUrl: './rick-details.component.css'
})
export class RickDetailsComponent implements OnInit {
  @Input() character!: RickMortyI | undefined;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")
    if (id) {
      this.apiService.getCharacter(id).subscribe({
        next: (response) => this.character = response,
        error: () => {
          console.log("On a pas trouvé les détails, déso mec")
        }
      })
    }
  }
}