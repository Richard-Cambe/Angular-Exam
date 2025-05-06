import { Injectable } from "@angular/core";
import { Api } from "@/models/api.model";
import { ApiI } from "@/interfaces/api-interface";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  apis: ApiI[] = [
    {
      id: 1,
      title: "API Rick & Morty ",
      description: "IMPRESSIONNEZ-MOI",
      createdDate: new Date(),
      likes: 0,
      image: "https://stickerdeco.fr/wp-content/uploads/2018/08/sticker-mural-rick-and-morty-000-2-316x316.jpg"
    },
    {
      id: 2,
      title: "API NASA ",
      description: "SCIENCE, BICHE",
      createdDate: new Date(),
      likes: 42,
      image: "https://www.grapheine.com/wp-content/uploads/2013/10/US-NASA-Seal-logo.jpg"
    },
  ];

  getApiList(): ApiI[] {
    return this.apis;
  }

  getApiByID(apiId: number): ApiI|undefined{
    const api = this.apis.find(api => api.id === apiId);
    if(!api) return undefined;
    return api;
  }

  onLikeApiByID(apiId: number): void {
    const api = this.getApiByID(apiId);

    if (!api) {
      throw new Error("Cet api n'existe pas !");
    }

    switch (api.isLiked) {
      case true:
        api.likes--;
        api.isLiked = false;
        break;
      case false:
      default:
        api.likes++;
        api.isLiked = true;
        break;
    }
  }
}
