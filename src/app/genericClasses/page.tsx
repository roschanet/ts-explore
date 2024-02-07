import DataStorage from "@/generics/genericClasses"

export default function GenericClassesPage(){
    // string data
    const textStorage = new DataStorage<string>()

    textStorage.addItem('Welly')
    textStorage.addItem('Susan')
    textStorage.remoteItem('Susan')
    const textData = textStorage.getItems()

    // number data
    const numberStorage = new DataStorage<number>()

    numberStorage.addItem(20)
    numberStorage.addItem(30)
    numberStorage.addItem(40)
    numberStorage.remoteItem(40)
    const numberData = numberStorage.getItems()

    // Not work for object data, only works for primitive types: string, number, boolean etc
    // const objectStorage = new DataStorage<object>()
    // objectStorage.addItem({name: 'Robert'})
    // objectStorage.addItem({name: 'Lidya'})
    // objectStorage.remoteItem({name: 'Lidya'})
    // const objectData = objectStorage.getItems()

    return (
        <> 
        <h1>Generic Classes Page</h1>
        {`The data are: ${textData}`} {`The data type is: `} {typeof textData} <br />
        {/* {`The data are: ${objectData}`} {`The data type is: `} {typeof textData} <br /> */}
        {`The data are: ${numberData}`} {`The data type is: `} {typeof numberData}
        </>
    )
}