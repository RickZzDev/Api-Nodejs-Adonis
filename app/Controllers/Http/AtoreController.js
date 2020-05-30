'use strict'
const Ator = use('App/Models/Atore.js')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with atores
 */
class AtoreController {
   
  /**
  * @swagger
  * /Atores:
  *   get:
  *     tags:
  *       - Atores
  *     summary: Sample API
  *     responses:
  *       200:
  *         description: Ver Atores
  *         example:
  *           Response: Object Ator
  *   post:
  *     tags:
  *       - Atores
  *     parameters:
 *       - name: puppy
 *         description: Puppy object
 *         in: body
 * 
 *       
  *     summary: Sample API
  *     responses:
  *       200:
  *         description: Ver Atores
  *         example:
  *           Response: Object Ator
  * 
  */
  /**
   * Show a list of all atores.
   * GET atores
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const atores = await Ator.all()
    return atores
  }

  /**
   * Render a form to be used for creating a new atore.
   * GET atores/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  /**
   * Create/save a new atore.
   * POST atores
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const ator = request.only(['nome'])
    const atorCreated = Ator.create({...ator})

    return atorCreated
  }

  /**
   * Display a single atore.
   * GET atores/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const ator = Ator.findOrFail(params.id)
    return ator
  }

  /**
   * Render a form to update an existing atore.
   * GET atores/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  /**
   * Update atore details.
   * PUT or PATCH atores/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a atore with id.
   * DELETE atores/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const ator = await Ator.findOrFail(params.id)

    await ator.delete()
  }
}

module.exports = AtoreController
