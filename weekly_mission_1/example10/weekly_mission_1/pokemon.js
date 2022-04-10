export default class Pokemon{
    constructor(name){
        this.name = name
    }

    sayHello(){
        console.log(`Mi Pokémon ${ this.name } te saluda!`)
    }

    sayMessage(message){
        console.log(`Mi Pokémon ${ this.name } dice: ${ message }`)
    }
}
