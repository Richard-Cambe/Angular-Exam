import { ApiI, ApiModelI } from "@/interfaces/api-interface";

export class Api implements ApiModelI{

  constructor(public api: ApiI) {
    this.api.isLiked = false;
  }

  onLike(): void {
    switch (this.api.isLiked) {
      case true:
        this.api.likes--;
        break;
      case false:
      default:
        this.api.likes++;
        break;
    }

    this.api.isLiked = !this.api.isLiked;
  }
}