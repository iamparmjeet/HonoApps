import { Hono } from 'hono'

const app = new Hono()

//TODO: Do Seperate Routes and Handler

app.get('/', (c) => {
  return c.text('Hello Hono from parm!')
})

function sayHello(message: string) {
  console.log(message)
}

sayHello("hi")


export default app
