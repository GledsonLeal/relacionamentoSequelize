//navegar entre as entidades

(async ()=>{

    const database = require('./conexaoMysql')
    const Produto = require('./models/produto')
    const Fabricante = require('./models/fabricante')
    const Categoria = require('./models/categoria')
    await database.sync()// retriar o force: true para não criar novamente

    const novaCategoria = await Categoria.create({nome: 'Informatica'})
    const produto = await Produto.findByPk(4)
    await produto.setCategoria([novaCategoria])

    const fabricante = await Fabricante.findByPk(4, {include: Produto})    
    console.log(fabricante.produtos)
     
    

})()