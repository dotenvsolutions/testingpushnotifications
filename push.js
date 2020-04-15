var push = require('web-push')

let vapidKeys = {
  publicKey: 'BJFKcFTLYt7wa7AM3wYTpJQTuiO49qz5Wp4aCNYABp8M6NNCTneVc5um1VVHaVLP89PXnkLm1HFb2jFI6rP4cbU',
  privateKey: 'l4X7WHvMOL2hFEvN-yzfshF191fk25pRflHS2r2Vldk'
}
 
push.setVapidDetails('mailto:perdoalex0121@gmail.com',vapidKeys.publicKey,vapidKeys.privateKey)

let subs = {"endpoint":"https://fcm.googleapis.com/fcm/send/cb-Z070_9gc:APA91bFZbc-Jg2RcxoH7C3pdSbVNRfjLCVyNBRr2BmezQA7GbSMp0St8CsiqqrGJYdL1EXH1_ktI85SkiOcBGone6Vi51406HnS3SQIljSinIOw6AtlIBCqmRphW2nxvK9zOZLIOf8LC","expirationTime":null,"keys":{"p256dh":"BHEUCisGf514LYHhUIKGWGBfy_A1XCM5PyO0gwyd0rGSQBuoaExwZAwUWu7hiSP4DJbJXTaM6YYY9V687L1l5tw","auth":"68p1AR3zAiEe0ERJFg1Hqw"}};
push.sendNotification(subs, 'Mensaje de prueba')
//console.log(vapidKeys)