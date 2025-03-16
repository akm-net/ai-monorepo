import { Hono } from 'hono'
import { env } from 'hono/adapter'

const app = new Hono()

app.get('/', (c) => {
  const { TESTDEVVAR } = env<{ TESTDEVVAR: string }>(c)
  console.log(c.text(TESTDEVVAR))
  return c.text('Hello Hono!')
})

export default app
