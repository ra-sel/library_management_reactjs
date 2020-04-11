const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
var cors = require('cors')

app.use(bodyparser.json());
app.use(cors())
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'library_P',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});

app.listen(5000, () => console.log('Express server is runnig at port no : 5000'));

//Get all employees
app.get('/api/attendreport', (req, res) =>
 {
    const attendreport = [
    mysqlConnection.query('SELECT tid,name, CASE WHEN d01 = 1 THEN "P" WHEN d01 = 2 THEN "A" WHEN d01 = 0 THEN "W" END d01, CASE WHEN d02 = 1 THEN "P" WHEN d02 = 2 THEN "A" WHEN d02 = 0 THEN "W" END d02,   CASE WHEN d03 = 1 THEN "P" WHEN d03 = 2 THEN "A" WHEN d03 = 0 THEN "W" END d03,  CASE WHEN d04 = 1 THEN "P" WHEN d04 = 2 THEN "A" WHEN d04 = 0 THEN "W" END d04,  CASE WHEN d05 = 1 THEN "P" WHEN d05 = 2 THEN "A" WHEN d05 = 0 THEN "W" END d05,  CASE WHEN d06 = 1 THEN "P" WHEN d06 = 2 THEN "A" WHEN d06 = 0 THEN "W" END d06,  CASE WHEN d07 = 1 THEN "P" WHEN d07 = 2 THEN "A" WHEN d07 = 0 THEN "W" END d07,   CASE WHEN d08 = 1 THEN "P" WHEN d08 = 2 THEN "A" WHEN d08 = 0 THEN "W" END d08,   CASE WHEN d09 = 1 THEN "P" WHEN d09 = 2 THEN "A" WHEN d09 = 0 THEN "W" END d09,   CASE WHEN d10 = 1 THEN "P" WHEN d10 = 2 THEN "A" WHEN d10 = 0 THEN "W" END d10  FROM attendreport', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
];

});

app.get('/book', (req, res) =>
 {
    const teacheratn = [
    mysqlConnection.query('SELECT * FROM book', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
];

});
app.get('/jwtt', (req, res) =>
 {
    mysqlConnection.query(`SELECT * FROM admin`, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});
app.post('/raas1', (req, res) =>
 {
    mysqlConnection.query(`SELECT * FROM admin`, (err, rows, fields) => {
        if (!err)
            res.send({'success': true});
        else
            console.log(err);
    })
});

app.post('/api/tregpost', function(req, res, next) {
    var id = req.body.id;
   

    var sql = `UPDATE issue_book SET return_date="sadsad" WHERE readers_id="${id}"`;
    mysqlConnection.query(sql, function(err, result) {
      if(err) {
     
      }
      res.json({'status': 'success'})
    })
  });

  app.post('/treg', function(req, res, next) {
      var tid = req.body.tid;
      var tname = req.body.tname;
      var depart = req.body.depart;
      var mno = req.body.mno;
      var email = req.body.email;

      var sql = `INSERT INTO readers( id, name, department, role, number, email)  VALUES ("${tid}","${tname}","${depart}","teacher","${mno}","${email}" )`;
      mysqlConnection.query(sql, function(err, result) {
        if(err) {
          res.status(500).send({ error: 'Something failed!' })
        }
        if(!err){
            res.send("Success")
        }
      })
    });
 
  app.post('/sreg', function(req, res, next) {
      var tid = req.body.tid;
      var tname = req.body.tname;
      var depart = req.body.depart;
      var mno = req.body.mno;
      var email = req.body.email;

      var sql = `INSERT INTO readers( id, name, department, role, number, email)  VALUES ("${tid}","${tname}","${depart}","student","${mno}","${email}" )`;
      mysqlConnection.query(sql, function(err, result) {
        if(err) {
          res.status(500).send({ error: 'Something failed!' })
        }
        if(!err){
            res.send("Success")
        }
      })
    });
 

  


 app.get('/readers', (req, res) =>
 {
    mysqlConnection.query(`SELECT * FROM readers`, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

 app.get('/issue', (req, res) =>
 {
    mysqlConnection.query(`SELECT * FROM issue_book`, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

 app.post('/issues', function(req, res)
 {
  var date= req.body.date;
   var issue = req.body.issue
    mysqlConnection.query(`UPDATE issue_book SET return_date="${date}" WHERE readers_id="${issue}"`, (err, rows, fields) => {
        if (!err)
            res.send("success");
        else
            console.log(err);
    })
});