import slugify from "slugify"
import models from "../models/models.js"
import messageService from "../services/messageService.js"

class categoryController {
  async create(req, res) {
    try {
      const { name } = req.body

      const categoryVerify = await models.Categories.findOne({ where: { name } })
      if (categoryVerify) {
        return res.json(messageService.send(0, 'Категория с таким названием существует!'))
      }

      const slug = slugify(name).toLowerCase()
      const category = await models.Categories.create({ name, slug })

      res.json(category)
    } catch (e) {
      console.log(e)
    }
  }

  async getAll(req, res) {
    try {
      const categories = await models.Categories.findAll()
      res.json(categories)
    } catch (e) {
      console.log(e)
    }
  }

  async getOne(req, res) {
    try {
      const { slug } = req.params
      const { limit, tag } = req.query
      let category

      if (slug != 'all') {
        category = await models.Categories.findOne({
          where: { slug },
          include: [{
            model: models.Portfolio,
            attributes: ['id', 'slug', 'name', 'preview', 'tags']
          }]
        })
      } else {
        category = {
          id: 0,
          name: 'Портфолио',
          slug: 'all',
          portfolios: await models.Portfolio.findAll({
            attributes: ['id', 'slug', 'name', 'preview', 'tags']
          })
        }
      }

      let filters = []

      category.portfolios.forEach(item => {
        JSON.parse(item.tags).forEach(subItem => {
          if (!filters.includes(subItem)) {
            filters.push(subItem)
          }
        })
      })

      let filterPortfolio = category
      let i = 0
      if (tag) {
        filterPortfolio = []
        category.portfolios.forEach(item => {
          JSON.parse(item.tags).forEach(subItem => {
            if (tag.includes(subItem)) {
              i++
            }
          })

          if (i > 0) {
            filterPortfolio.push(item)
          }
          i = 0
        })
        filterPortfolio = {
          portfolios: filterPortfolio
        }
      }

      if (limit) {
        filterPortfolio = {
          portfolios: filterPortfolio.portfolios.slice(0, limit)
        }
      }

      res.json({
        filters,
        info: {
          id: category.id,
          name: category.name,
          slug: category.slug
        },
        portfolios: filterPortfolio
      })
    } catch (e) {
      console.log(e)
    }
  }

  async update(req, res) {
    try {
      const { id, name } = req.body

      const categoryVerify = await models.Categories.findOne({ where: { name } })
      if (categoryVerify && categoryVerify.id != id) {
        return res.json(messageService.send(0, 'Категория с таким название существует!'))
      }

      const slug = slugify(name).toLowerCase()

      await models.Categories.update({ name, slug }, { where: { id } })

      res.json(messageService.send(1, 'Категория обновлена!'))

    } catch (e) {
      console.log(e)
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params

      const portfolioCheck = await models.Portfolio.findAll({ where: { categoryId: id } })

      if (portfolioCheck.length > 0) {
        return res.json(messageService.send(0, 'У этой категории есть проекты!'))
      }

      await models.Categories.destroy({ where: { id } })

      res.json(messageService.send(1, 'Категория удалена!'))

    } catch (e) {
      console.log(e)
    }
  }
}

export default new categoryController