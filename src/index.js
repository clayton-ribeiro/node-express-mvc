const express = require('express')
const app = express()

app.use('/admin',require('./router/admin'));
app.use(require('./router/product'));

app.use((req, res) => res.send({'error':'route not found'}));


app.listen(3000)