import { Server } from 'http'
import app from './app'
const port = 5000


//server 
 let server: Server
 async function bootstrap(){
     server= app.listen(port, () => {
        console.log(` app listening on port ${port}`)
      })
 }

bootstrap();