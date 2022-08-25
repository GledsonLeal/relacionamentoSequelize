//tabela meio, para fazer a conexão entre categorias, fabricantes e produtos
const Sequelize = require('sequelize')
const database = require('../conexaoMysql')

const CategoriaProduto = database.define('categoriaProduto',{ //entidade
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
})
/**
 * RELACIONAMENTOS
 * 1-1
 * 1-N
 * N:M
 */

module.exports = CategoriaProduto