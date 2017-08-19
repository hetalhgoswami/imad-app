var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
 'articleOne': {
    title: "Article one|hetal goswami",
    headding: 'Article-one',
    date: 'sep 5 2017',
    content: `p>
                This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code.
            </p>
            <p>
                This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code.
            </p>
            <p>
                This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code. This is my first html code.
            </p>`
        
},
'articleTwo': {
    title: "Article Two|hetal goswami",
    headding: 'Article-Two',
    date: 'sep 10 2017',
    content: `p>
                This is my second html code..
            </p>`
},
'articleThree': {
    title: "Article Two|hetal goswami",
    headding: 'Article-Two',
    date: 'sep 10 2017',
    content: `p>
                This is my third html code..
            </p>`
}
};
function createTamplate(data)
{
    var title = data.title;
    var date = data.date;
    var headding = data.headding;
    var content = data.content;
    var htmltamplate=
   `<html>
     <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width-device-width initial-scale-1"/>
          <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
          ${headding}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>`;
return htmltemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
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
