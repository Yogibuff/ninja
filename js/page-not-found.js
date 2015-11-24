// 404 page redirect - all routes that do not match produce my template instead

app.error(function(err, req, res, next){
    if (err instanceof NotFound) {
        res.sendFile('ninja/404-page.html');
    } else {
        next(err);
    }
});

/* webserver code written in node.js */
/* needed to make the 404 page function properly, if the site was actually hosted online */

/* 
var http = require('http')
, url = require('url')
, fs = require('fs')
, path = require('path')
, server;

server = http.createServer(function(req,res){

  var myPath = url.parse(req.url).pathname;

    switch(myPath){

      case '/public':

        // get the extensions of the files inside this dir (.html, .js, .css)
        var extname = mypath.extname(path);

          switch (extname) {

            // get the html
            case '.html':
              fs.readFile(__dirname + '/public/chatclient.html', function (err, data) {
                if (err) return send404(res);
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data, 'utf8');
                res.end();
              });
            break;

            // get the script that /public/chatclient.html references
            case '.js':
              fs.readFile(__dirname + '/public/js/script.js', function (err, data) {
                if (err) return send404(res);
                res.writeHead(200, { 'Content-Type': 'text/javascript' });
                res.end(content, 'utf-8');
                res.end();
              });
            break;

            // get the styles that /public/chatclient.html references
            case '.css':
              fs.readFile(__dirname + '/public/css/style.css', function (err, data) {
                if (err) return send404(res);  
                res.sendFile('ninja/404-page.html', { 'Content-Type': 'text/javascript' }); //inserted 404-page.html instead of standard 404
                res.end(content, 'utf-8');
                res.end();
              });
          }
          break;

          default: send404(res);
        }
    });

    */