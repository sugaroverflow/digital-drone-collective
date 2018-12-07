var express = require('express');
var router = express.Router();

var people = [
        {
            "name": "Andee Pittman",
            "position": "User Experience (UX) Designer",
            "team": "Code for Canada",
            "image":"./images/andee-headshot-bw.png",
            "twitter": "https://twitter.com/andeepittmanux"
        },
        {
            "name": "Jennifer Payne",
            "position": "Product Manager",
            "team": "Code for Canada",
            "image":"./images/jen-headshot-bw.png",
            "twitter": "https://twitter.com/jnnfrpyn"
        },
        {
            "name": "Fatima Sarah Khalid",
            "position": "Software Developer",
            "team": "Code for Canada",
            "image":"./images/fatima-headshot-bw.png",
            "twitter": "https://twitter.com/sugaroverflow"
        },
        {
            "name": "WeiGuang Xiao",
            "position": "Developer",
            "team": "CivAv Digital Services",
            "image":"./images/weiguang-headshot-bw.png",
            "twitter": "https://twitter.com/weiguang_xiao"
        },
        {
            "name": "Jeannie Stewart-Smith",
            "position": "Policy Advisor",
            "team": "RPAS TF",
            "image":"./images/jeannie-headshot-bw.png",
            "twitter": "https://twitter.com/JeannieEva9"
        },
        {
            "name": "Olivier Bellehumeur-Génier",
            "team": "RPAS TF",
            "image":"./images/olivier-headshot-bw.png",
            "position": "Safety Inspector"
        },
];

var connections = [
    {
        "icon": "fas.fa-plane-departure",
        "title": "Follow our journey",
        "subtitle": "For daily updates, photos, and possibly some videos, check out our Tumblr.",
        "link":"http://tumblr.digitaldronecollective.com/",
        "button": "Follow"
    },
    {
        "icon": "fas.fa-book-open",
        "title": "Read our blogs",
        "subtitle": "For long form, periodic updates on the project, read the Code for Canada blog.",
        "link":"https://medium.com/code-for-canada/",
        "button": "Read"
    },
    {
        "icon": "fas.fa-camera-retro",
        "title": "See our photos",
        "subtitle": "Check out our Flickr for a visual story of our project",
        "link":"http://tumblr.digitaldronecollective.com/",
        "button": "See"
    }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Digital Drone Collective', people:people, connections:connections});
});

module.exports = router;
