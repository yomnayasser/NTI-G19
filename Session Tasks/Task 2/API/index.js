function apiData(cb){
    const data = fetch('https://jsonplaceholder.typicode.com/todos')
    data
    .then(res=> {
        jsonData = res.json()
        jsonData
        .then(result=> cb(result))
        .catch(ee=> cb(ee))
    })
    .catch(e=> cb(e))
}

apiData(res=> console.log(res))