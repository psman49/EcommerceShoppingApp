const http = require('http');
const fs = require('fs');
const { response } = require('express');

//function requesListener(requ,resp) {

//}
const server = http.createServer((requ, resp) => {
     const url = requ.url;
     const method = requ.method;
    if (url === '/') {
        resp.write('<html>');
        resp.write('<head><title>Enter Message</title></head>');
        resp.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        resp.write('</html>')
        return resp.end(); 
    }
      if (url === '/message' && method === 'POST') {
          const body =[];
          requ.on('data', (chunk) => {
              console.log(chunk);
              body.push(chunk);
          });
          requ.on('end', () => {
              const parsedBody = Buffer.concat(body).toString();
              const message = parsedBody.split('=')[1];
              fs.writeFileSync('message.txt', message);
          })
         
         resp.statusCode = 302;
         resp.setHeader('Location','/')
         return resp.end();
      }
    resp.setHeader('Content-Type', 'text/html');
    resp.write('<html>');
    resp.write('<head><title>Enter Message</title></head>');
    resp.write('<body><h1>Hello from my Node.js Server</h1></body>')
    resp.write('</html>');
    resp.end();
});
 server.listen(3000);

