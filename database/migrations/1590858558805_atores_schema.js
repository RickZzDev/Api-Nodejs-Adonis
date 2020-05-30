'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AtoresSchema extends Schema {
  up () {
    this.create('atores', (table) => {
      table.increments()
      table.string("nome",150).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('atores')
  }
}

module.exports = AtoresSchema
