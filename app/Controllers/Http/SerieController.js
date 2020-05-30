'use strict'

const Serie = use('App/Models/Serie')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with series
 */
class SerieController {
    /**
  * @swagger
  * /Atores:
  *   get:
  *     tags:
  *       - Series
  *     summary: Sample API
  *     responses:
  *       200:
  *         description: Ver Series
  *         example:
  *           Response: Object Serie

  * 
  */
  /**
   * Show a list of all series.
   * GET series
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const series = await Serie.query().with('diretor').fetch()
    return series
  }

  /**
   * Render a form to be used for creating a new serie.
   * GET series/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  /**
   * Create/save a new serie.
   * POST series
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['nome','temporadas','diretor_id'])
    const serie = await Serie.create({...data})
    return serie
  }

  /**
   * Display a single serie.
   * GET series/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const serie = await Serie.findOrFail(params.id)
    return serie
  }

  /**
   * Render a form to update an existing serie.
   * GET series/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  /**
   * Update serie details.
   * PUT or PATCH series/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a serie with id.
   * DELETE series/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const serie = await Serie.findOrFail(params.id)
    await serie.delete()
  }
}

module.exports = SerieController
