self.addEventListener('push', () => {
	self.registration.sendNotification('Cursos nuevos', {})
})