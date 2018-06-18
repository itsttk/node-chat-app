const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT ||3000;


//console.log(__dirname+ '/../public');
//console.log(publicPath);


var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));



io.on('connection', (socket)=>{
    console.log('new user connected');

    // socket.emit('newEmail', {
    // 	from: 'teja@example.com',
    // 	text: 'hey how can i help',
    // 	createAt:123

    // });

    // socket.on('createEmail',(newEmail)=>{
    // 	console.log('createEmail',  newEmail);

    // });

    socket.emit('newMessage', {
    	from: 'Admin',
    	text: 'Welcome to chat app',
    	createdAt: 1245

    });

    socket.broadcast.emit('newMessage',{
		from: 'Admin',
		text: 'new user joined',
		createdAt: new Date().getTime()

	});



    socket.on('createMessage', (message)=>{

    	console.log('create message', message);

    	io.emit('newMessage',{
    		from: message.from,
    		text: message.message, 
    		createdAt: new Date().getTime()


    	});



    });



	socket.on('disconnect',()=>{
	console.log('user was disconneceted');
    });
});



server.listen(port,()=>{
	console.log("server is up and running on", port);
});

