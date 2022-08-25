const Sequelize = require('sequelize')
const database = require('../conexaoMysql')

const Fabricante = database.define('fabricante',{ //entidade
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    }
})
/**
 * RELACIONAMENTOS
 * 1-1
 * 1-N
 * N:M
 */

module.exports = Fabricante