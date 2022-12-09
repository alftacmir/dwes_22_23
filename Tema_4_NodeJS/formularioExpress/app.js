const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));


app.get('/', (req, res) => {
  res.render('formulario.ejs');
});

app.post('/animales', (req, res) => {
    let animalesFavorito= req.body.variableEnviada;
    res.render('tuanimal.ejs', { animalParaEnviarWeb: animalesFavorito});
});

app.listen('3000', (req, res) => {
    console.log('Express server listening on port 3000');
});    