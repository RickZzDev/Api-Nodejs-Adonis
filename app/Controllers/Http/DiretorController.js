'use strict'

const Diretor = use('App/Models/Diretor')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with diretors
 */
class DiretorController {
  /**
  * @swagger
  * /diretores:
  *   get:
  *     tags:
  *       - Diretores
  *     summary: Sample API
  *     responses:
  *       200:
  *         description: Ver Diretores cadastrados
  *         example:
  *           Response : Objects Directors
  */
  /**
   * Show a list of all diretors.
   * GET diretors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
     const diretores = await Diretor.all()

     return diretores
  }

  /**
   * Render a form to be used for creating a new diretor.
   * GET diretors/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */


  /**
   * Create/save a new diretor.
   * POST diretors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['nome'])
    const diretorCreated = await  Diretor.create({...data})

    return diretorCreated
  }

  /**
   * Display a single diretor.
   * GET diretors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
     const diretor = await Diretor.findOrFail(params.id)

     return diretor
  }

  /**
   * Render a form to update an existing diretor.
   * GET diretors/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  /**
   * Update diretor details.
   * PUT or PATCH diretors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

  }

  /**
   * Delete a diretor with id.
   * DELETE diretors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const diretor = await Diretor.findOrFail(params.id)

    await diretor.delete()
  }
}

module.exports = DiretorController
