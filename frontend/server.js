const express = require('express')
const path = require('path')
const { createProxyMiddleware } = require('http-proxy-middleware');


const PORT = process.env.PORT || 3000
const PROXY_URL = process.env.PROXY_URL || 'http://localhost:8080'

const app = express()
app.use(express.static(__dirname))
app.use(express.static(path.resolve(__dirname, 'build')))

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/api', createProxyMiddleware({
    target: PROXY_URL,
    changeOrigin: true
}));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT)