//navegar entre as entidades

(async ()=>{

    const database = require('./conexaoMysql')
    const Produto = require('./models/produto')
    const Fabricante = require('./models/fabricante')
    await database.sync()// retriar o force: true para não criar novamente
    
    const fabricante = await Fabricante.findByPk(4, {include: Produto}) //formato EAGER LOADING   
    console.log(fabricante.produtos)
     
    

})()