import { Component, Input, OnInit } from '@angular/core';
import { ObservablesPreview } from '@/models/observables-preview.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-observables-preview',
  imports: [
    CommonModule
  ],
  templateUrl: './observable-preview.component.html',
  styleUrl: './observable-preview.component.css'
})
export class ObservablesPreviewComponent implements OnInit {
  @Input({required: true}) observablesPreview!:ObservablesPreview;

  ngOnInit(): void {
    
  }
}