import 'reflect-metadata'
import { IHttp } from "./Http";
import { injectable, inject, multiInject } from "inversify";
import { ILogger } from "./Logger";
import { Types } from "./IoC/Types";

@injectable()
export class TemperatureSensor {
  
  constructor(
    @inject(Types.IHttp) private _http: IHttp,
    @multiInject(Types.ILogger) private _log: ILogger[]
    ) {}

  public getTemperature():number {
    const celsiusTemp = this._http.get(process.env.weatherUrl);
    const tempFarhenheit = this.getTemperatureInFarhenheit(celsiusTemp);
    this._log[0].Log(`Temp in farhenheit ${tempFarhenheit}`);
    return tempFarhenheit
  }

  getTemperatureInFarhenheit(celsiusTemp: number): number {
    return celsiusTemp * 1.7;
  }
}
