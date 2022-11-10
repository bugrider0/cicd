const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log(req.ip)
    res.status(200).json({ message: "WTFFFFFFF" })
})

app.listen(3000, () => console.log(`Server is running on 0.0.0.0:3000`))


