import { RickMortyI } from '@/interfaces/rick.interface';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rick-details',
  imports: [CommonModule],
  templateUrl: './rick-details.component.html',
  styleUrl: './rick-details.component.css'
})
export class RickDetailsComponent {
  @Input() character!:RickMortyI;
}