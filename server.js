const express = require('express') ; 
const path = require('path')
require('dotenv').config()

const PORT = process.env.PORT || 5555 ;

const app = express() ;

app.use(express.json()) ;

app.use(express.static('client/build')) ; // ici on ouvre la porte pour que express puisse aller dans mon Réact. 

app.get('/api/youtube', (req, res) => {
    res.send({
        msg: "Bonjour les hardcorders !"
    })
})

app.get('/serveur', (req, res) => {
    res.send("Mon serveur est en marche !")
})

app.get('/*', (req, res) =>{ // on va envoyer toute les adresses sur 
    res.sendFile(path.join(__dirname, './client/build/index.html'))  // demande à notre serveur de renvoyer tout notre trafic vers l'index.html de notre réact
})

app.listen(PORT, () => {
    console.log(`le serveur est lancé sur le port : ${PORT}`);
})