const express = require('express');
const router = express.Router();

const myConnect = require('../Models/connect');

router.get('/cadastro', (req, res) =>{

 

    console.log('URL:', req.url );
    console.log('METHOD: ', req.method);

    myConnect.query('SELECT * FROM cadastro', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.get('/cadastro/:id', (req, res)=> {
    const { id } = req.params;
    myConnect.query('SELECT * FROM cadastro WHERE id = ?', [id],
    (err, rows, fields)=> {
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    });
});

router.post('/cadastro', (req, res)=> {
    const data = req.body;
    myConnect.query('INSERT INTO cadastro SET ?', [data], (err, cadastro) =>{
        console.log(data);
    });
});

router.put('/cadastro/:id', (req, res)=> {

    const { id } = req.params;
    const newdata = req.body;

    myConnect.query('UPDATE cadastro SET ? WHERE id = ?', [newdata, id], (err) =>{
        console.log(newdata);
    });
});

router.delete('/cadastro/:id', (req, res)=> {
    const { id } = req.params;
    myConnect.query('DELETE FROM cadastro WHERE id = ?', [id],
    (err, rows, fields)=> {
        console.log('Registro: '+id+' deletado!') 
    });
});


module.exports = router;