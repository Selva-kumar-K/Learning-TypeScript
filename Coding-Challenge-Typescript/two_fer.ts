function two_fer(name? : string) : string{
    if (name){
        return `One for ${name}, one for me.`
    }else{
        return `One for you, one for me.`
    }
}

two_fer("Selva")
