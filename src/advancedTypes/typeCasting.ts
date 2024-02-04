// The idea is to make it typescript know the type of DOM that not recognice by it

// There are three ways
// 1
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')
// 2
// const userInputElement = document.getElementById('user-input') as HTMLInputElement
// 3
export const userInputElement = document.getElementById('user-input')

// userInputElement.value = 'Hi there!'

if(userInputElement){
    (userInputElement  as HTMLInputElement).value = 'Hi there!'
}

