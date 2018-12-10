var express = require('express');
var router = express.Router();

var people = [
        {
            "name": "Andee Pittman",
            "position": "Concepteur d'expérience utilisateur",
            "team": "Code for Canada",
            "image":"./images/andee-headshot-bw.png",
            "twitter": "https://twitter.com/andeepittmanux",
            "linkedIn":"https://www.linkedin.com/in/andeepittman/"
        },
        {
            "name": "Jennifer Payne",
            "position": "Chef de produit",
            "team": "Code for Canada",
            "image":"./images/jen-headshot-bw.png",
            "twitter": "https://twitter.com/jnnfrpyn",
            "linkedIn":""
        },
        {
            "name": "Fatima Sarah Khalid",
            "position": "Développeur de logiciels",
            "team": "Code for Canada",
            "image":"./images/fatima-headshot-bw.png",
            "twitter": "https://twitter.com/sugaroverflow",
            "linkedIn":"https://www.linkedin.com/in/fatimasarahkhalid/"
        },
        {
            "name": "WeiGuang Xiao",
            "position": "Développeur de logiciels",
            "team": "les Services numériques de l’aviation civil",
            "image":"./images/weiguang-headshot-bw.png",
            "twitter": "https://twitter.com/weiguang_xiao",
            "linkedIn":"https://www.linkedin.com/in/weiguang-xiao-39b11350/"
        },
        {
            "name": "Jeannie Stewart-Smith",
            "position": "Conseiller politique",
            "team": "le Groupe de travail sur les systèmes aéronefs télépilotés",
            "image":"./images/jeannie-headshot-bw.png",
            "twitter": "https://twitter.com/JeannieEva9",
            "linkedIn":"https://www.linkedin.com/in/jeannie-stewart-smith-00a54ab/"
        },
        {
            "name": "Olivier Bellehumeur-Génier",
            "team": "le Groupe de travail sur les systèmes aéronefs télépilotés",
            "image":"./images/olivier-headshot-bw.png",
            "position": "Inspecteur de la sécurité",
            "linkedIn":"https://www.linkedin.com/in/olivier-bellehumeur-g%C3%A9nier-b5058b13b/"
        },
];


/* GET French home page. */
router.get('/', function(req, res, next) {
  res.render('french', { title: 'Digital Drone Collective', people:people, connections:connections});
});

module.exports = router;
