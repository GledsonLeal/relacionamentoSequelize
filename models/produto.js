const Sequelize = require('sequelize')
const database = require('../conexaoMysql')
const Fabricante = require('./fabricante')
const CategoriaProduto = require('./categoriaProduto')
const Categoria = require('./categoria')

const Produto = database.define('produto',{ //entidade
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,// não aceita vazio
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: Sequelize.DECIMAL,
    descricao: Sequelize.STRING
})
/**
 * RELACIONAMENTOS
 * 1-1
 * 1-N
 * N:N
 */

//Exemplo de 1-1: O produto pertence a um fabricante
        Produto.belongsTo(Fabricante,{
            constraint: true,// garante a integridade referencial, chave estrangeira para ligar produto com fabricante
            foreignKey: 'idFabricante'// nome da chave estrangeira
        })
//Exemplo de 1-N: um fabricante tem muitos produtos
        Fabricante.hasMany(Produto, { //hasMany: ele possui muitos
            foreignKey: 'idFabricante'
        })


//Exemplo de N:N muitos pra muitos:
        Produto.belongsToMany(Categoria, {//belongsToMany: pertence a muitos
            //qual outro modelo esse N:M deve ser ajustado
            through: {//through: através
                model: CategoriaProduto
            },
            foreignKey: 'idProduto',// chave estrangeira
            constraint: true// criar a chave estrangeira CategoriaProduto
        })
        Categoria.belongsToMany(Produto, {
            through: {
                model: CategoriaProduto
            },
            foreignKey: 'idCategoria',
            constraint: true// criar a chave estrangeira CategoriaProduto
        })

        Produto.hasMany(CategoriaProduto, {foreignKey: 'idProduto'})
        CategoriaProduto.belongsTo(Produto, {foreignKey: 'idProduto'})
        Categoria.hasMany(CategoriaProduto, {foreignKey: 'idCategoria'})
        CategoriaProduto.belongsTo(Categoria, {foreignKey: 'idCategoria'})
module.exports = Produto