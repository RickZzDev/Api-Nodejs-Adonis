'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SerieSchema extends Schema {
  up () {
    this.create('series', (table) => {
      table.increments()
      table.string("nome",150).notNullable()
      table.integer("temporadas").notNullable()
      table
        .integer("diretor_id")
        .notNullable()
        .references("id")
        .inTable("diretors")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
      table.timestamps()
    })
  }

  down () {
    this.drop('series')
  }
}

module.exports = SerieSchema
