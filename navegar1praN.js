//navegar entre as entidades

(async ()=>{

    const database = require('./conexaoMysql')
    const Produto = require('./models/produto')
    const Fabricante = require('./models/fabricante')
    await database.sync()// retriar o force: true para não criar novamente
    
    const fabricante = await Fabricante.findByPk(1, {include: Produto})    
    console.log(fabricante.produtos)
     
    

})()