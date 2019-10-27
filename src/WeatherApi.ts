import { injectable, inject } from "inversify";
import { IHttp } from "./Http";
import { Types } from "./IoC/Types";

interface IWeatherApiResponse {
  current_temp: number;
}

@injectable()
export class WeatherApi {
  constructor(@inject(Types.IHttp) private _http: IHttp){}

  async getTemperature(): Promise<number> {
    const response = await this._http.get<IWeatherApiResponse>("http://localhost:3000/data")

    return response.current_temp;
  }
}
