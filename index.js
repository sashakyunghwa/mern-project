const express = require('express');
const cors = require ('cors');
const PORT = process.env.PORT || 9000;

const app = express();

//cor is setting your headers to allow cross origin request to anything 
app.use(cors());

//this is where the backend goes
app.get('/api/get-stuff', (req, res) => {
    res.send({sucess: true, message: 'Here is some stuff from the back-end'});
})

app.get('/', (req, res) => {
    res.send('<h1>This is something different ...</h1>');
});

app.listen(PORT, () => {
    console.log('Server running on PORT:' + PORT);
});