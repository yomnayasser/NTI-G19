const apiReq=require('./apiReq')
const yargs = require('yargs')
yargs.command({
    command:"urlInput",
    builder:{
        url:{
            type:String,
            demandOption:true
        }
    },
    handler:function(argv){
        apiReq(argv.url)
    }
})

yargs.argv