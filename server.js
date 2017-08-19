var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne= {
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
        
};
function createTamplate(Data)
{
    var title = Data.title;
    var date = Data.date;
    var headding = Data.headding;
    var content = Data.content;
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

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/article-one',function(req,res){
    res.send(createTamplate(articleOne));
});
app.get('/article-two',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
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
