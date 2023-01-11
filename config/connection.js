const mongoClient=require('mongodb').MongoClient
const state={
    db:null

}

module.exports.connect=function(done){
    //const url='mongodb://127.0.0.1'
    
   const  url =process.env.MONGODB_URL
    
    const dbname='liquor'



    mongoClient.connect(url,(err,data)=>{
        if(err) done(err)
        state.db=data.db(dbname);
        done()
    })


}
module.exports.get=function(){
    return state.db
}
