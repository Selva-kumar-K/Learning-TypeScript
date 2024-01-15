interface myData {
    name : string
    city : string
    age : number | string
}

const user : myData = {
    name : "Selva",
    city : "Coimbatore",
    age : 24
}

console.log(user)

interface userData {
    name : string
    dep : string
    printDetails : (message : string) => string
}

const newUser : userData = {
    name : 'Nithish',
    dep : '3D',
    printDetails: (message) => message
}

console.log(newUser.printDetails("Hello"))
