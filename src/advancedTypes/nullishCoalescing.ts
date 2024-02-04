// Checking if the value is null or undefined with ?? mark, if true than viewing value, opposite of && where if not null or not undefined than viewing value

class NullishCoalescing {
    // private userInput = ''
    // private userInput = 'hello'
    // private userInput = null
    private userInput = undefined

    storeData = this.userInput || 'DEFAULT'
}

export default NullishCoalescing