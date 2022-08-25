(async ()=>{

    const database = require('./conexaoMysql')
    const Produto = require('./models/produto')
    const Fabricante = require('./models/fabricante')
    await database.sync()
    
    //const novoFabricante = await Fabricante.create({
        //nome: 'Apple'
    //})

    
    const buscaFabricante =  await Fabricante.findByPk(2)
    const novoProduto = await Produto.create({
            nome: 'Notebook Macbook',
            preco: 20000,
            descricao: 'Outro Notebook da Apple',
            idFabricante: buscaFabricante.id
    })
    console.log(novoProduto)
    
    //console.log(await Produto.findByPk(3))

    //const deletaProduto = await Produto.findByPk(4)
    //console.log(deletaProduto)
    //await Produto.destroy(deletaProduto)
    await Produto.destroy({where: {nome: Mackbook}})
     
    

})()