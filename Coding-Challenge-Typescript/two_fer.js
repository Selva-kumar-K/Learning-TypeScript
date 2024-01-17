function two_fer(name) {
    if (name) {
        return "One for ".concat(name, " and, one for me.");
    }
    else {
        return "One for you, one for me.";
    }
}
console.log(two_fer(""))
