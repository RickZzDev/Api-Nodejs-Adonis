'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DiretorSchema extends Schema {
  up () {
    this.create('diretors', (table) => {
      table.increments()
      table.string('nome',150).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('diretors')
  }
}

module.exports = DiretorSchema
