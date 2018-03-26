const express = require('express')
const path = require('path')
const formatDate = date => date.toLocaleString('en-gb', { month: "long", day:'numeric', year:'numeric' })

const makeResponse = date => ({ unix: date.getTime() / 1000, natural: formatDate(date) })

module.exports = app => {
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../public', 'index.html'))
    })
    app.get('/:time', (req, res) => {
        const day = new Date(req.params.time)
        if(day.toDateString() === 'Invalid Date'){
            if(req.params.time.toUpperCase() === 'NOW'){
                const now = new Date()
                res.send(makeResponse(now))
                return
            }
            const unixDay = new Date(req.params.time * 1000)
            if(unixDay.toDateString() === 'Invalid Date'){
                res.send({ error:'Error 400: cannot process request'})
            } else{
                res.send(makeResponse(unixDay))
            }
        } else{
            res.send(makeResponse(day))
        }
        res.end()
    })
}