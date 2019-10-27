import 'reflect-metadata'
import { injectable } from "inversify";

export interface ILogger {
  Log(text: string) : void;
}

@injectable()
export class ConsoleLogger implements ILogger {
  public Log(text: string): void {
    console.log(text)
  }
}

@injectable()
export class FileLogger implements ILogger {
  public Log(text: string): void {
    console.log('FILE', text)
  }
}
