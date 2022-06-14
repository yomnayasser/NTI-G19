const fs = require("fs")
class File{
    static readFromFile=(filename)=>{
        let data
        try{
            data=JSON.parse(fs.readFileSync(filename))
            if(!Array.isArray(data)) throw new Error("data not valid")
        }
        catch(e)
        {
            data=[]
        }
        return data
    }
    static writeInFile=(filename,data)=>{
       try{
        if(!Array.isArray(data)) throw new Error("data not valid")
        fs.writeFileSync(filename,JSON.stringify(data))
       }
       catch(e)
       {

       }
    }
}

module.exports=File
