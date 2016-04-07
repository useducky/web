import express                   from 'express'
import React                     from 'react'
import { renderToString }        from 'react-dom/server'
import { RoutingContext, match } from 'react-router'
import createLocation            from 'history/lib/createLocation'
import routes                    from '../shared/routes.jsx'
import webpackAssets             from '../shared/webpack-assets.json'
const app = express()
app.use((req, res) => {
  const location = createLocation(req.url)
  match({ routes, location }, (err, redirectLocation, renderProps) => {
    if (err) { 
      console.error(err)
      return res.status(500).end('Internal server error')
    }
    if (!renderProps) return res.status(404).end('Not found.')
    
    const InitialComponent = (
      <RoutingContext {...renderProps} />
    )
    const componentHTML = renderToString(InitialComponent)
    const dist = process.env.DIST_PATH || '/'
    const HTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
	<link rel="stylesheet" href="`+dist+webpackAssets.main.css+`" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" type="image/png" href="https://cldup.com/SN8s9w6ARD.png">
        <title>Ducky</title>
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
        <script type="application/javascript" src="`+dist+webpackAssets.main.js+`"></script>
      </body>
  </html>    
`
    res.end(HTML)
  })
})
export default app
