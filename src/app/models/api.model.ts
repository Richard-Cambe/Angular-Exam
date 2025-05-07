import { ApiI, ApiModelI } from "@/interfaces/api-interface";

export class Api implements ApiModelI{

  constructor(public api: ApiI) {}
}