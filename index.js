//cria o servidor
const express = require('express')
// cria a aplicação
const app = express() 
// tratamento do path
const path = require('path') 
//importando convert
const convert = require('./lib/convert')
//importando api bcb
const apiBCB = require('./lib/api.bcb')

//setando o ejs(estudar sobre isso)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
//lugar para colocar arquivos (css)
app.use(express.static(path.join(__dirname, 'public')))

//renderizando a pagina home
app.get('/', async (req, res) => {
    const cotacao = await apiBCB.getCotacao()
    res.render('home', {
        cotacao
    })
})

//renderizando a pagina cotacao
app.get('/cotacao', (req, res) =>{
    const {cotacao, quantidade} = req.query
    if(cotacao && quantidade){
        const conversao = convert.convert(cotacao, quantidade)
        res.render('cotacao', {
            error: false,
            cotacao: convert.toMoney(cotacao),
            quantidade: convert.toMoney(quantidade),
            conversao: convert.toMoney(conversao)
        })
    }else{
        res.render('cotacao', {
            error : 'Valores Inválidos!'
        })
    }
})

//Verifica se está tudo ok com a criação do servidor
app.listen(3000, err => {
    if(err){
        console.log('nao foi possivel iniciar')
    }else{
        console.log("ConvertMyMoney esta online")
    }
})


