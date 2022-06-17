const dbConnection=(cb)=>{
const {MongoClient}=require('mongodb')
const dbURL='mongodb://localhost:27017'
const dbName="User"
MongoClient.connect(dbURL,{},(error,client)=>{
    if(error) return console.log("unable to connect")
    const db = client.db(dbName)
    cb(db)
})
}

module.exports=dbConnection