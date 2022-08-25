//navegar entre as entidades

(async ()=>{

    const database = require('./conexaoMysql')
    const Produto = require('./models/produto')
    const Fabricante = require('./models/fabricante')
    await database.sync()// retriar o {force: true} para não criar novamente
    
    //posso pegar as informações do fabricante, a partir do produto
    const produto =  await Produto.findByPk(1)
    const fabricante = await produto.getFabricante()// formado LAZY LOADING (carregamento tardio)
                                                    // pego o produto no banco e, através do produto,
                                                    //volto e pego o fabricante
    console.log(fabricante.nome)
    
    const produto1 = await Produto.findByPk(1, {include: Fabricante})//formato EAGER LOADING
                                                                     // o fabricante já vem com o produto
    console.log(produto1.fabricante.nome)
    
    //await Produto.destroy({where: {preco: 500}})
     
    

})()