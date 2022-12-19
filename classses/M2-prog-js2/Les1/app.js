
class Dino
{
    constructor(naam, vleeseter, leeftijd, leeft)
    {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
        this.leeft = leeft;

    }

    eetDino(dino, naam)
    {
        dino.leeft = false; 
        console.log(naam + " eet de dino " + dino)
    }
    
    plant(naamplant, naam)
    {
        this.naamplant = naamplant;
        console.log(naam + " eet de plant " + naamplant)
    }
}

class App
{
    runApplication(check, xtree, ytree)
    {
        let trex1 = new Dino("trex1",true,10, true, true)
        let trex2 = new Dino("trex2",false,7, true, true)
        let trex3 = new Dino("trex3",true,15, true, true)
        console.log(trex1,trex2,trex3)
        Dino.plant("grass", trex2)
        Dino.eetDino(trex2, trex3)
        
    }
}


let app = new App();
app.runApplication();