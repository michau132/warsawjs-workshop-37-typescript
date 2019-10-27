import 'reflect-metadata'
import { IHttp } from "./Http";
import { injectable, inject, multiInject } from "inversify";
import { ILogger } from "./Logger";
import { Types } from "./IoC/Types";
import { WeatherApi } from './WeatherApi';



@injectable()
export class TemperatureSensor {
  
  constructor(
    private api: WeatherApi,
    @multiInject(Types.ILogger) private _log: ILogger[]
  ) {}

  public async getTemperature():Promise<number> {
    const celsiusTemp = await this.api.getTemperature();
    const tempFarhenheit = this.getTemperatureInFarhenheit(celsiusTemp);
    this._log[0].Log(`Temp in farhenheit ${tempFarhenheit}`);
    return tempFarhenheit
  }

  getTemperatureInFarhenheit(celsiusTemp: number): number {
    return celsiusTemp * 1.7;
  }
}
