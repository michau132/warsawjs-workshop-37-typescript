import 'reflect-metadata'
import { injectable } from "inversify";
import axios, {AxiosResponse} from 'axios';

export interface IHttp {
  get<T>(url: string):Promise<T>;
}

@injectable()
export class Http implements IHttp {
  public async get<T>(url: string): Promise<T> {

    const result: AxiosResponse<T> = await axios.get<T>(url);
    console.log(`Fetching data from ${url}`)
    return result.data
  }
}
