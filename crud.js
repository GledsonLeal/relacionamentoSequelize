(async ()=>{

    const database = require('./conexaoMysql')
    const Produto = require('./models/produto')
    const Fabricante = require('./models/fabricante')
    await database.sync()
    
    //const novoFabricante = await Fabricante.create({
    //    nome: 'Samsung'
    //})

    
    const buscaFabricante =  await Fabricante.findByPk(4)
    const novoProduto = await Produto.create({
            nome: 'Smartphone Samsung Galaxy A03',
            preco: 799,
            descricao: 'Celular da Samsung',
            idFabricante: buscaFabricante.id
    })
    console.log(novoProduto)
    
    //console.log(await Produto.findByPk(3))

    //const deletaProduto = await Produto.findByPk(4)
    //console.log(deletaProduto)
    //await Produto.destroy(deletaProduto)
    //await Produto.destroy({where: {nome: Mackbook}})
    

})()