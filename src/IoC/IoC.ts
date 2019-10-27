import 'reflect-metadata'
import { Container } from "inversify";
import { Main } from "../Main";
import { ConsoleLogger, ILogger, FileLogger } from '../Logger';
import { Types } from './Types';
import { TemperatureSensor } from '../TemperatureSensor';
import { Http, IHttp } from '../Http';
import { WeatherApi } from '../WeatherApi';

//.inTransientScope() domyslny typ, dziala tak samo jakbysmy wywolywali nowa instancje klasy
//bindujemy klase Main do samej siebie, inSingletonScope znaczy ze to jest singleton


const IoC = new Container();
IoC.bind<Main>(Main).toSelf().inSingletonScope()
IoC.bind<ILogger>(Types.ILogger).to(ConsoleLogger)
IoC.bind<ILogger>(Types.ILogger).to(FileLogger)
IoC.bind<TemperatureSensor>(TemperatureSensor).toSelf()
IoC.bind<IHttp>(Types.IHttp).to(Http);
IoC.bind<WeatherApi>(WeatherApi).toSelf();

export {IoC}
