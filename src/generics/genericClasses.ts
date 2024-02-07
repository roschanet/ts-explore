class DataStorage<T extends string | number | boolean> {
    private data: T[] = []
    addItem(item: T){
        this.data.push(item)
    }

    remoteItem(item: T){
        if(this.data.indexOf(item) === -1){
            return;
        }
        this.data.splice(this.data.indexOf(item), 3) // will return -1 if not find
    }

    getItems(){
        return this.data
    }
}

export default DataStorage