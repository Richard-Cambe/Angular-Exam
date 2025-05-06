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
      title: "Where is Big Mom ? ",
      description: "She's a yonko",
      createdDate: new Date(),
      likes: 0,
      image: "https://i.pinimg.com/736x/d4/8c/60/d48c60c1c76c79e8b6ec91ff8a7212b3.jpg"
    },
    {
      id: 2,
      title: "¿ Dondé està la Big Mom ? ",
      description: "Dondé",
      createdDate: new Date(),
      likes: 42,
      image: "https://ih1.redbubble.net/image.4575616820.0941/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg"
    },
  ];

  getApiList(): ApiI[] {
    return this.apis;
  }

  getApiByID(websnapId: number): ApiI|undefined{
    const webSnap = this.apis.find(api => api.id === apiId);
    if(!api) return undefined;
    return api;
  }

  onLikeApiByID(apiId: number): void {
    const api = this.getApiByID(apiId);

    if (!api) {
      throw new Error("Ce websnap n'existe pas !");
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
