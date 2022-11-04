const express = require('express')
const app = express()
const PORT = 3002

// Greetings

// 2. Make a route '/greeting/ that sends a generic greeting to the screen like "Hello, stranger".

// 3. Give the greeting route a param /:name

// 4. When hitting the route, the page should display a message such as "Hello,", or "What's up, <name>", or <name>! 

app.get('/greeting/:name', (request, response) => {
    response.send(`Hello, ${request.params.name}`)
})

// Tip Calculator

// 2. Your app should have a route of '/tip/ and it should expect 2 params. One should be total and one should be tipPercentage.

// 3. When hitting the route, the page should display how much your tip will be based on the total amount of the bill and the tip percentage. 

app.get('/tip/:total/:tipPercentage', (request, response) => {
    const tipPercentage = Number(request.params.tipPercentage) % Number(request.params.total)
    response.send(`The tip percentage is ${tipPercentage}`)
})

// Magic 8 Ball

// 2. Create a route of '/magic' that should expect a phrase in the URL that ask the Magic 8 Ball a question

// 3. So if the user hits that route and asks a question of "Will I be a Millionaire" he should have his question returned to him and a random Magic 8 ball response (see the array below) on the screen.

// 4. We can't use spaces in the url, so we use %20 to express a space in the url.

// 5. Send the Magic 8 Ball response back between html <h1> tags.

const magicBall = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/magic/:question', (request, response) => {
    response.send(`${request.params.question}
    <h1>${magicBall[Math.floor(Math.random()*20)]}</h1>`)
})

app.listen(PORT, () => {
    console.log(`listening to ${PORT}`)
})

// Take One Down and Pass It Around

// Build an express application that enables user to count down the number of bottles of beer.