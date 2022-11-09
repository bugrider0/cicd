const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log(`----=+ Hello +=----`)
    res.status(200).json({
        name: `Fuck you`
    })
})

app.listen(3000, () => console.log(`Server is running on PORT: 3000`))

