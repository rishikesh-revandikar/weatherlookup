import express from 'express'
// import path from 'path'
// const path = require('path')
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import hbs from 'hbs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const Port = 8000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../views");
const partial_path = path.join(__dirname, "../views/partials");

app.set('view engine', 'hbs');
app.set('views', template_path);
app.use(express.static(static_path));
hbs.registerPartials(partial_path)


app.get("/", (req, res) => {
    res.render('index')
});

app.get("/weather", (req, res) => {
    res.render('weather');
});

app.get("/about_us", (req, res) => {
    res.render('about')
});

app.get("*", (req, res) => {
    res.render('404error', {
        errorMsg: 'Oops!! Page not found'
    });
});

app.listen(Port, (req, res) => {
    console.log(`listening at ${Port}`);
});