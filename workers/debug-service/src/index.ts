import { Hono } from 'hono'
import { env } from 'hono/adapter'

const app = new Hono()

app.get('/', (c) => {
  const { TESTDEVVAR } = env(c)
  return c.text(TESTDEVVAR)
})

export default app
