self.addEventListener('push', e => {
	var options = {
		body: 'Descrubre lo nuevo en genesis',
		image: 'images/youtube.png',
		icon: 'images/64.png',
		vibrate: [100,50,100],
		data: {
			dateOfArrival: Date.now(),
			primaryKey: '2'
		},
		actions: [
			{action: 'https://sistemasgenesis.com.ec/genesisweb', title: 'Descubre lo nuevo de Génesis', icon:'images/checkmark.png'},
			{action: 'close', title: 'Cerrar', icon: 'images/xmark.png'}
		]
	};
	e.waitUntil(
		self.registration.showNotification('Cursos nuevos', options)
		);
});