const mysql = require('mysql');

const myConnect = mysql.createConnection({
    host: 'localhost',
    user: 'devken',
    password: '@dev_ken130483',
    database: 'studiovivah'

});

myConnect.connect(function (err) {
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Db studio vivah conectado com sucesso!')
    }
});

module.exports = myConnect;

