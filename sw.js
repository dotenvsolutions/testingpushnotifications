self.addEventListener('push', e => {
	var options = {
		body: 'Esta notificacion fue generada desde push',
		icon: 'images/example.png',
		vibrate: [100,50,100],
		data: {
			dateOfArrival: Date.now(),
			primaryKey: '2'
		},
		actions: [
			{action: 'explore', title: 'Explora este nuevo Mundo', icon:'images/checkmark.png'},
			{action: 'close': title: 'Cerrar', icon: 'images/xmark.png'}
		]
	};
	e.waitUntil(
		self.registration.sendNotification('Cursos nuevos', options)
		);
	
})