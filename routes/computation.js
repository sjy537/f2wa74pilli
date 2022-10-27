var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next)
{
    res.render('computation', { title: 'Functions worked by Sanjay Kumar Pilli' });
    var a = Math.random();

    var b = Math.hypot(a);
    var c = Math.ceil(a);
    var d = Math.clz32(a);

   
    res.send("Math.hypot() applied to "+a+" is "+b+"<br></br>"+"Math.ceil() applied to "+a+" is "+c+"<br></br>"+
                "Math.clz32() applied to "+a+" is "+d);
});

module.exports = router;