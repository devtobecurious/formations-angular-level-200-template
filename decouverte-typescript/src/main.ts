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
