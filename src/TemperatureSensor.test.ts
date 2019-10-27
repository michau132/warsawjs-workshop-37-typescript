import 'reflect-metadata'
import { TemperatureSensor } from "./TemperatureSensor";
import { IHttp } from "./Http";
import { ILogger, ConsoleLogger, FileLogger } from "./Logger";

class HttpMock implements IHttp {
  get() {
    return 20;
  }

}


describe('should ', () => {
  it('should do smth', () => {
    //Given
    const http: IHttp = new HttpMock();
    const logger: ILogger[] = [new ConsoleLogger(), new FileLogger()];
    const sut = new TemperatureSensor(http, logger);
    //THen

    const result = sut.getTemperature();
    //When

    expect(result).toBe(34)
  });
  
})
