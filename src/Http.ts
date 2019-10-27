import 'reflect-metadata'
import { injectable } from "inversify";

export interface IHttp {
  get(url: string):number;
}

@injectable()
export class Http implements IHttp {
  public get(url: string): number {
    console.log(`Fetching data from ${url}`)
    return 30
  }
}
