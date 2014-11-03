
exports.index = function (req, res){
    res.setHeader('content-type', 'text/javascript');
    var js = 'var greeting = "hello";';
    js += 'var section = document.getElementById("content-1");';
    js += 'console.log("' + req.params.name + '");';
    js += 'section.style.background = \"yellow\";';
    js += 'section.innerHTML = \"content from the awesome MicroCMS\"';
    res.end(js);
};