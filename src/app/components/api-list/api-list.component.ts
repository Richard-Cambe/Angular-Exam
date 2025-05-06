import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '@/services/api.service';
import { ApiI } from '@/interfaces/api-interface';
import { ApiDetailsComponent } from '@/components/api-details/api-details.component';

@Component({
  selector: 'app-api-list',
  imports: [
    ApiDetailsComponent
  ],
  templateUrl: './api-list.component.html',
  styleUrl: './api-list.component.css'
})
export class ApiListComponent implements OnInit{
  private apiService = inject(ApiService);

  apiDatalist!: ApiI[];

  ngOnInit(): void{
    this.apiDatalist = this.apiService.getApiList();
  }
}