export type LogLevel = 'info' | 'debug' | 'error'

export type Log = {
    message: string
    level: LogLevel
    timestamp: Date
}
