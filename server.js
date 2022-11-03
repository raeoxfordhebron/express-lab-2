const express = require('express')
const app = express()
const PORT = 3002

// 2. Make a route '/greeting/ that sends a generic greeting to the screen like "Hello, stranger".

// 3. Give the greeting route a param /:name

// 4. When hitting the route, the page should display a message such as "Hello,", or "What's up, <name>", or <name>! 

app.get('/greeting/:name', (request, response) => {
    response.send(`Hello, ${request.params.name}`)
})


app.listen(PORT, () => {
    console.log(`listening to ${PORT}`)
})