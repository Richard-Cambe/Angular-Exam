import { WebSnapI } from '@/interfaces/api.interface';
import { ApiService } from '@/services/api.service';
import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-api-details',
  imports: [
    CommonModule
  ],
  templateUrl: './api-details.component.html',
  styleUrl: './api-details.component.css'
})
export class ApiDetailsComponent {
  protected ApiService = inject(ApiService);
  private router = inject(Router);
  @Input({required: true}) api!: ApiI;

  onShowApi(id: number): void{
    this.router.navigateByUrl(`apis/api/${id}`);
  }
}