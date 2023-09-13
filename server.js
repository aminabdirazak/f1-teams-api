const express = require('express')
const app = express()
const PORT = 8000

const formulaOneTeams = {
          'red bull racing':{
                    teamName: "Red Bull Racing",
                    teamPrincipal: "Christian Horner",
                    teamLocation: "Milton Keynes, England, UK",
                    driverChampions:"6",
                    constructorChampions:"5"
          },
          'scuderia ferrari':{
                    teamName: "Scuderia Ferrari",
                    teamPrincipal: "Frédéric Vasseur",
                    teamLocation: "Maranello, Province of Modena, Italy",
                    driverChampions:"15",
                    constructorChampions:"16"
          },
          'mercedes-amg petronas f1 team':{
                    teamName: "Mercedes-AMG Petronas F1 Team",
                    teamPrincipal: "Toto Wolff",
                    teamLocation: "Stuttgart, Baden-Württemberg, Germany 1950s, Brackley and Brixworth, England, UK (current)",
                    driverChampions:"9",
                    constructorChampions:"8"
          },
          'williams racing':{
                    teamName: "Williams Racing",
                    teamPrincipal: "James Vowles",
                    teamLocation: "Grove, Oxfordshire, England, UK",
                    driverChampions:"7",
                    constructorChampions:"9"
          },
          'bwt alpine f1 team':{
                    teamName: "BWT Alpine F1 Team",
                    teamPrincipal: "Bruno Famin",
                    teamLocation: "Enstone, England, UK | Viry-Châtillon, France",
                    driverChampions:"0",
                    constructorChampions:"0"
          },
          'lamakasay':{
                    teamName: "Lamakasay",
                    teamPrincipal: "Lamakasay",
                    teamLocation: "Lamakasay",
                    driverChampions:"Lamakasay",
                    constructorChampions:"Lamakasay"
          }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})



app.get('/api/:TName', (request, response)=>{
  const teamNames =  request.params.TName.toLowerCase()
    if(formulaOneTeams[teamNames]){
          response.json(formulaOneTeams[teamNames])
    }else {
          response.json(formulaOneTeams['lamaKasay'])
    }
    //response.json(formulaOneTeams) dont bother
})

app.listen(PORT, ()=>{
          console.log(`the server is running on port ${PORT} you better catch it!`)
})