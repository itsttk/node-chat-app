		var socket =io();

		socket.on('connect', function(){
			console.log('connected to server');

			// socket.emit('createEmail',{
			// 	to: 'jen@example.com',
			// 	text: 'hi'
			// });

			   socket.emit('createMessage', {

			   	from:'ttk',
			   	message: 'hi server'

			   });
		});

		socket.on('disconnect',function(){
			console.log('disconnected from server');
		});

		// socket.on('newEmail', function(email){
		// 	console.log('new email' ,email);
		// });

		socket.on('newMessage',function(message){

			console.log('newMessage',message);

		});