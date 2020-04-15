var push = require('web-push')

let vapidKeys = {
  publicKey: 'BJFKcFTLYt7wa7AM3wYTpJQTuiO49qz5Wp4aCNYABp8M6NNCTneVc5um1VVHaVLP89PXnkLm1HFb2jFI6rP4cbU',
  privateKey: 'l4X7WHvMOL2hFEvN-yzfshF191fk25pRflHS2r2Vldk'
}
 
push.setVapiDetails('mailto:perdoalex0121@gmail.com',vapidKeys.publicKey,vapidKeys.privateKey)

let subs = {

};
push.sendNotification(subs, 'Mensaje de prueba')
//console.log(vapidKeys)