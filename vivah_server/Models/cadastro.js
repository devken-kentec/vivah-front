const conector = require('./connect');

const Cad = conector.sequelize.define('cadastros', {
        nome: {
            type: conector.Sequelize.STRING(50)
        },
        cpf: {
            type: conector.Sequelize.STRING(20)
        },
        data_nasc: {
            type: conector.Sequelize.DATEONLY
        },
        fone: {
            type: conector.Sequelize.STRING(20)
        },
        fone_cel: {
            type: conector.Sequelize.STRING(20)
        },
        fone_cel2: {
            type: conector.Sequelize.STRING(20)
        },
        endereco: {
            type: conector.Sequelize.STRING
        },
        sexo: {
            type: conector.Sequelize.ENUM('M','F')
        },
        email: {
            type: conector.Sequelize.STRING(60)
        },
        login:{
            type: conector.Sequelize.STRING(20)
        },
        tipo_user:{
            type: conector.Sequelize.STRING(50)
        },
        senha: {
            type: conector.Sequelize.STRING(20)
        },
        status_mat: {
            type: conector.Sequelize.ENUM('A','I') 
        }
});   


module.exports = Cad;

//Para criar a tabela
//Cad.sync({})