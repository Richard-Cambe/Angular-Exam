import { inject, Injectable, signal } from "@angular/core";
import { Api } from "@/models/api.model";
import { ApiI } from "@/interfaces/api-interface";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { RickMortyI } from "@/interfaces/rick.interface";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private rickApi = "https://rickandmortyapi.com/api/character"
  
  private nasaApi ="https://api.nasa.gov/planetary/apod"
  private nasaKey = "7QLy5k8nYf9OJ5o9e0zb08cM6OxLMpcmWppirBPz"

  private http = inject(HttpClient)

  public rick = signal<RickMortyI[]>([])

  getNasaPic():Observable<any>{
    return this.http.get(`${this.nasaApi}?api_key=${this.nasaKey}`)
  }

  getRickCharacters():Observable<RickMortyI[]>{
    return this.http.get<{results:RickMortyI[]}>(this.rickApi).pipe(
      map((response)=> response.results)
    )
  }

  getCharacter(id:string):Observable<RickMortyI> {
    return this.http.get<RickMortyI>(`${this.rickApi}/${id}`).pipe(
        map((response) => response)
    )
}

  apis: ApiI[] = [
    {
      id: 1,
      title: "API Rick & Morty ",
      image: "https://stickerdeco.fr/wp-content/uploads/2018/08/sticker-mural-rick-and-morty-000-2-316x316.jpg"
    },
    {
      id: 2,
      title: "API NASA ",
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
}
