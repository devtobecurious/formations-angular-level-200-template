interface WithSurnameAndHeight {
    surname: string
    height: number
}


class MainCharacter {
    surname = ''
    height = 100
}

const character = new MainCharacter()

const char2: WithSurnameAndHeight = {
    height: 120,
    surname: 'luke'
}

function displayMainCharacter(item: WithSurnameAndHeight): void {
    console.info(item.surname)
}

displayMainCharacter(character)
displayMainCharacter(char2)

displayMainCharacter({ surname: '', height: 140 })


// function displayValue(value: any): void {
//     console.info(value)
//     console.info(value.toUpperCase())
// }
// function displayValue(value: unknown): void {
//     console.info(value)
//     if(typeof(value) === 'string') {
//         console.info(value.toUpperCase())
//     }
// }
function displayValue(value: string | number): void {
    console.info(value)
    if(typeof(value) === 'string') {
        console.info(value.toUpperCase())
    } else {
        console.info(value.toFixed(1))
    }
}

displayValue('coucou')
displayValue(1)