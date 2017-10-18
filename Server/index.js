const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();
const bookCtrl = require(`./controllers/books_controller`)

app.use(bodyParser.json() );
app.use(express.static('${__dirname}/../public/build'))


const baseURL = "/api/books";
app.post(baseURL, bookCtrl.create); 
app.get(baseURL, bookCtrl.read);
app.put("${baseURL}/:id", bookCtrl.update);
app.delete("{baseURL}/:id", bookCtrl.delete);




const port = 3000;
app.listen(port, () => {console.log(`Server listening on port ${port}`)});


