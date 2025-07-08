import { Log } from "./models/log";

/**
 * Interface to log a message
 * @example
 * ```ts
 * const logger = new Logger()
 * logger.log({message: 'Hello World', level: 'info', timestamp: new Date()})
 * ```
 */
export interface ToLog {
    log(log: Log, ...args: any[]): void
}

