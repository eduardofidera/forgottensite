// server essentials and mongoose for DB connection
const express = require("express")
const bodyParser = require("body-parser")

// server side rendering related
import path from "path"
import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import Layout from "./components/Layout"

// for enviroment purposes, it will load .env file and set variables
require("dotenv").config()

// express app
const app = express()

// express app - server side rendering related
app.use(express.static(path.resolve(__dirname, "../../client/public")))

app.get(/^((?!\/api).)*$/, (req, res) => {
  const context = {}
  const jsx = (
    <StaticRouter context={context} location={req.url}>
      <Layout />
    </StaticRouter>
  )
  const reactDom = renderToString(jsx)

  res.writeHead(200, { "Content-Type": "text/html" })
  res.end(htmlTemplate(reactDom))
})

// express app - api related
const players = require("./routes/player.route")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/api/players", players)

app.listen(process.env.PORT || 3000, () => {
  console.log("app is running!")
})

function htmlTemplate(reactDom) {
  return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>ForgottenSite</title>
        </head>
        
        <body>
            <div id="app">${reactDom}</div>
            <script type="text/javascript" src="./bundle.js"></script>
        </body>
        </html>
    `
}
