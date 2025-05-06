import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { Api } from '@/models/api.model';
import { RickMortyI } from '@/interfaces/rick.interface';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@/services/api.service';

@Component({
  selector: 'app-rick',
  imports: [
    CommonModule
  ],
  templateUrl: './rick.component.html',
  styleUrl: './rick.component.css'
})

export class RickComponent implements OnInit {
  private rickService = inject(ApiService);
  character: WritableSignal<RickMortyI|undefined> = signal(undefined);

  private route = inject(ActivatedRoute)


  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log('id', id)

    this.rickService.getCharacter(id).subscribe(
      {
        next: (response) => {
          this.character.set(response)
        },
        error:(err) => {
          console.log("erreur : l'api a échoué")
        }
      },
    );
  }

}