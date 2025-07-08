type LogLevel = 'info' | 'debug' | 'error'

function log(message: string, level: LogLevel = 'info') {
    console.log(`[${level}] ${message}`)
}

log('Hello World'       )
log('Hello World', 'debug')
log('Hello World', 'error')


interface Log {
    message: string
    level: LogLevel
    timestamp: Date
}
function logBis(log: Log) {
    console.log(`[${log.level}] ${log.message}`)
}

function logBiss({message, level, timestamp}: Log) {
    console.log(`[${level}] ${message}`)
}

const logTres: Log = {
    message: 'Hello World',
    level: 'info',
    timestamp: new Date()
}

logBis(logTres)






