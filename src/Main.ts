import 'reflect-metadata'
import { injectable, inject, multiInject } from 'inversify';
import { ConsoleLogger, ILogger } from './Logger';
import { Types } from './IoC/Types';
import { TemperatureSensor } from "./TemperatureSensor";

@injectable()
export class Main
{
    constructor(
        @multiInject(Types.ILogger) private _log: ILogger[],
        private _temp: TemperatureSensor
    )
    { }

    public async Start(): Promise<void>
    {           
        this._log[0].Log('startss');
        this._log[1].Log('startss');
        this._temp.getTemperature();
    }
}
