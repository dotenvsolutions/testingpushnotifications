var push = require('web-push')

let vapidKeys = {
	publicKey: 'BIuDOCV3t-FNcH2WypMSlAxC94oio5TL9JgEOaYN1qJuHlRNEz66KhdF5pAIk0vzKLG9IqIYvgnMf51TqTTIGU',
  	privateKey: 'qRBJpW7APfk7qQBg0PblYb8JHr1LPXT2HAm6NDo65kA'
}

push.setVapiDetails('mailto:perdoalex0121@gmail.com',vapidKeys.publicKey,vapidKeys.privateKey)

let subs = {
	
};
push.sendNotification(subs, 'Mensaje de prueba')
console.log(vapidKeys)