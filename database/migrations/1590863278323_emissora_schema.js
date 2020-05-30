'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmissoraSchema extends Schema {
  up () {
    this.create('emissoras', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('emissoras')
  }
}

module.exports = EmissoraSchema
