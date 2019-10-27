import 'reflect-metadata'
import { Mock } from "moq.ts";
import { TemperatureSensor } from "./TemperatureSensor";
import { IHttp } from "./Http";
import { ILogger, ConsoleLogger, FileLogger } from "./Logger";
import { WeatherApi } from './WeatherApi';


describe('should ', () => {
  it('should do smth', () => {
    //Given
    //const http: IHttp = new ();
    const weatherApiMock = new Mock<WeatherApi>()
    weatherApiMock.setup(x => x.getTemperature()).returns(30)
    const logger: ILogger[] = [new ConsoleLogger(), new FileLogger()];

    const sut = new TemperatureSensor(weatherApiMock.object(), logger);
    //THen

    const result = sut.getTemperature();
    //When

    expect(result).toBe(34)
  });
  
})
