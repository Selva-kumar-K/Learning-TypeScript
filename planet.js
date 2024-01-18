var Planet = /** @class */ (function () {
    function Planet() {
        this._name = "No name set";
    }
    Object.defineProperty(Planet.prototype, "name", {
        get: function () {
            return "This planet's name is ".concat(this._name);
        },
        set: function (planetName) {
            if (planetName === "Pluto") {
                this._name = "Sorry Pluto is dead";
            }
            else {
                this._name = planetName;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Planet;
}());
var newPlanet = new Planet();
newPlanet.name = "Pluto";
console.log(newPlanet.name);
