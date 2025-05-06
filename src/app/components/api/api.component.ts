import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '@/services/api.service';
import { ApiI } from '@/interfaces/api-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-api',
  imports: [
    CommonModule
  ],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent implements OnInit{
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  protected apiService = inject(ApiService);
  api!: ApiI|undefined;

  ngOnInit(): void{
    let id: number = Number(this.route.snapshot.params["id"]);
    console.log(id);

    if(!id){
      this.router.navigateByUrl("erreur/404");
    }

    this.api = this.apiService.getApiByID(id);
    if(!this.api) {
      this.router.navigateByUrl("apis");
    }
  }
}
