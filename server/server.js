const express = require('express');
const app = express();
const PORT = 8000; 
const cors = require('cors');

app.use(cors());

// fetch data 
app.get('/api/home', (req, res) => {
    res.json({message: "Backend", people: ['Harry', 'Jack', 'Berry']});
    // our goal is to display this on the client side by making api calls to backend
});
// run application without having to restart 
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});

// npm run dev 