// server essentials
import express from 'express'
import bodyParser from 'body-parser'

// server side rendering related
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Layout from '../../react/Layout'

// api routes
import players from './routes/player.route'

// for enviroment purposes, it will load .env file and set variables
require('dotenv').config()

// express app
const app = express()

// express app - server side rendering related
app.use(express.static(path.resolve(__dirname, '../../client/public')))

app.get(/^((?!\/api).)*$/, (req, res) => {
  const context = {}
  const jsx = (
    <StaticRouter context={context} location={req.url}>
      <Layout />
    </StaticRouter>
  )
  const reactDom = renderToString(jsx)

  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(htmlTemplate(reactDom))
})

// express app - api related
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api/players', players)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('app is running! port: ' + port)
})

function htmlTemplate(reactDom) {
  return `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>ForgottenSite</title>

          <link rel="stylesheet" type="text/css" href="/styles.css" />
      </head>
      
      <body>
          <div id="app">${reactDom}</div>
          <script type="text/javascript" src="./bundle.js"></script>
      </body>
      </html>
    `
}
