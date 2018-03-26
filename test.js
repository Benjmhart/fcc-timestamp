const fetch = require('node-fetch')


const getstuff = async () => {
    const r = await fetch('http://localhost:5000/')
    const j = await r.json()
    return j
}

const response = getstuff()

response