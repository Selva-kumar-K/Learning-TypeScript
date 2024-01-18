class Planet{
    private _name : string = "No name set"

    get name(){
        return `This planet's name is ${this._name}`
    }

    set name(planetName : string) {
        if(planetName === "Pluto"){
            this._name = "Sorry Pluto is dead"
        }else{
            this._name = planetName
        }
    }
}

const newPlanet = new Planet()

newPlanet.name = "Pluto"

console.log(newPlanet.name)


