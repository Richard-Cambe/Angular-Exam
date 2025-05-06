export interface ApiI{
    id?:number;
    title: string;
    description: string;
    createdDate: Date;
    likes: number;
    image: string;
    isLiked?: boolean;
  }
  
  export interface ApiModelI{
    api?:ApiI;
  }