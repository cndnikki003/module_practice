var fs=require('fs');

module.exports=function(){
	return function (request,response){

		if(request.url==='/'){
			fs.readFile('../cars_and_cats/views/cats.html', 'utf8', function (errors,contents){
				response.writeHead(200, {'Content-type': 'text/html'});
				response.write(contents);
				response.end();
			});	
		}
		else if(request.url === '/images/cat1.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('../cars_and_cats/images/cat1.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
    else if(request.url === '/images/cat2.jpg'){
    fs.readFile('../cars_and_cats/images/cat2.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
     else if(request.url === '/images/cat3.jpg'){
    fs.readFile('../cars_and_cats/images/cat3.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
else if(request.url === '/images/cat4.jpg'){
    fs.readFile('../cars_and_cats/images/cat4.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/labs'){
    fs.readFile('./views/labs.html','utf8', function(errors, contents){
        response.writeHead(200, {'Content-type': 'text/html'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/lab1.jpg'){
    fs.readFile('./images/lab1.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else 
  {
  	response.writeHead(404);
  	response.end("File Not Found");
  }
	}
}();