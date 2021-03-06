var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={
    'article-one':{
        title: 'Article one...i m hetal',
        heading: 'article one',
        date: 'Augest 5,2017',
        content:`
        <p>
        This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code.
            </p>
            <p>
                This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code.
            </p>
            <p>
                This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code.
            </p>`
    },
   'article-two':{
       title : 'Article two....i m hetal',
       heading: 'article two',
       date: 'Augest 6,2017',
       content:`
       <p>
          This is the conent for my second article.      
       </p>`
   },
   'article-three':{
       title:'article three..i m hetal',
       heading:'article three',
       date:'augest 7,2017',
       content:`
        <p>
                         This is the conent for my third article.      
                </p>`

   }
    
};
function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title} 
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
                <div>
                   ${content}
                </div>
            </div>
        </body>
    </html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var couter=0;
app.get('/couter',function(req,res){
    couter=couter+1;
    res.send(couter.toString());
});
app.get('/:articleName', function (req, res){
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
   });


app.get('/ui/style.css', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
