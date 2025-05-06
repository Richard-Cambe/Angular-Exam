export interface RickMortyI {
    id?:number;
    name:string;
    status:string;
    species:string;
    type:string;
    gender:string;
    image:string;
}

export interface WebRickMortyModelI{
    websnap?:RickMortyI;
  }