const express = require('express');
const movieRoute = require('./routes/moviesRoutes');
const app = express();
const port = 3001;

app.use(express.json());

//Rota padrão
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/movies', movieRoute);


app.listen(port, () => {
    console.log(`Server started on ${port}`);
});