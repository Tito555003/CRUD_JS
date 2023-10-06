export class CRUD{
    #tableName = null;
    #data = null;
    
    constructor(tableName){
        this.#setTableName(tableName);
        this.#setData();
    }

    #setTableName(tableName){
        this.#tableNameValidate(tableName);
        this.#tableName = tableName;
    }

    #setData(){
        let dataRepository = this.#get(this.#tableName);
        this.#data = dataRepository === null ? [] : dataRepository;
    }

    #tableNameValidate(tableName){
        if(tableName == undefined) throw new Error("table name required");
    }

    #save(){
        let dataToSave = JSON.stringify(this.#data);
        sessionStorage.setItem(this.#tableName, dataToSave);
    }

    #get(key){
        let data = sessionStorage.getItem(key);
        return JSON.parse(data);
    }

#existElementWithId(id){
    return this.#data[id] === undefined ? false : true;
}

#checkThatElementExistsWithId(id){
    if (!this.#existElementWithId(id))
        throw new Error("this element not exists");
}

   
 }