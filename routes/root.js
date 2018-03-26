module.exports = app => {
    app.all('*', (req, res) => {
        console.log('getting a request!')
        
        res.send({ thing: 'hello!'})
        console.log('sent')
        res.end()
    })
}