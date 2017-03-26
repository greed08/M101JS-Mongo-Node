var express=require('express'),
app=express();
var MongoClient=require('mongodb').MongoClient,
assert=require('assert');
engines=require("consolidate");
app.engine('html',engines.nunjucks);
app.set('view engine','html');
app.set('views',__dirname +'/views');
MongoClient.connect('mongodb://localhost:27017/video',function(err,db)
{
	assert.equal(null,err);
	console.log("Successfully connected to MongoDB");
	app.get('/',function(req,res)
	{
      db.collection('movies').find({}).toArray(function(err,docs)
      {
      	res.render('movies',{'mov':docs});
      });
	});
	

app.use(function(req,res)
{
	res.sendStatus(404);
});
var server=app.listen(3000,function()
{
	var port=server.address().port;
	console.log('Express started on %s',port);
});
});