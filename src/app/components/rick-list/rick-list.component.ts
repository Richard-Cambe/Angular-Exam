import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { RickMortyI } from '@/interfaces/rick.interface';
import { ApiService } from '@/services/api.service';
import { RickDetailsComponent } from '../rick-details/rick-details.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rick-list',
  standalone: true,
  imports: [
    CommonModule,
    RickDetailsComponent
  ],
  templateUrl: './rick-list.component.html',
  styleUrl: './rick-list.component.css'
})
export class RickListComponent implements OnInit{
  private RickService = inject(ApiService);

  rickDatalist: WritableSignal<RickMortyI[]> = signal([]);

  caCharge: boolean = true

  ngOnInit(): void{

    this.RickService.getRickCharacters().subscribe(
      {
        next: (response) => {
          this.rickDatalist.set(response)
          this.caCharge = false
        },
        error:() => {
          console.log("Ca a pas trouvé, mec")
          this.caCharge = false;
        }
    
      }
    );
  }
}
