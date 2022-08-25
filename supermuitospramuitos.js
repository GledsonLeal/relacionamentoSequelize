//navegar entre as entidades

(async ()=>{

    const database = require('./conexaoMysql')
    const Produto = require('./models/produto')
    const Fabricante = require('./models/fabricante')
    const Categoria = require('./models/categoria')
    await database.sync()// retriar o force: true para não criar novamente

    const produto = await Produto.findByPk(4, {
        include: Categoria
    })
    console.log(produto.categoria)
     
    

})()