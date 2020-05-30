'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Serie extends Model {
    diretor () {
        return this.belongsTo('App/Models/Diretor')
    }

    // example(){
    //     return this.hasMany("App/models/NomeDaModel")
    // }
}

module.exports = Serie
