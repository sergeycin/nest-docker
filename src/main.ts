import { NestFactory } from "@nestjs/core"

async function start(){
  const PORT = process.env || 8000
  const app = await NestFactory.create()
  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}

start()