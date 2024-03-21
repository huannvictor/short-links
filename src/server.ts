import fastify from 'fastify'
import { z } from "zod"
import { sql } from "./lib/postgres"

const app = fastify()

app.post('/links', async (request) => {
  const createLinkSchema = z.object({
    code: z.string().min(3),
    url: z.string().url()
  })

  const { code, url } = createLinkSchema.parse(request.body)

  const result = await sql/*sql*/`
    INSERT INTO short_links (code, original_url)
    VALUES (${code}) (${url})
    RETURNING id
  `
})

app.listen({ port: 3333 }).then(() => {
  console.log('server running on port 3333')
})