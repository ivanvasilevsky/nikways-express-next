import sequelize from "../db.js"
import { DataTypes } from "sequelize"

const Users = sequelize.define('users', {
  login: { type: DataTypes.STRING, unique: true},
  password: { type: DataTypes.STRING },
  fio: { type: DataTypes.STRING },
  active: { type: DataTypes.INTEGER, defaultValue: 1 },
  submit: { type: DataTypes.INTEGER, defaultValue: 0 },
  role: { type: DataTypes.STRING, defaultValue: 'USER' }
})

const User_statistic = sequelize.define('user_statistics', {
  statistic_social: { type: DataTypes.INTEGER },
  statistic_site: { type: DataTypes.INTEGER }
})

const User_goals = sequelize.define('user_goals', {
  project_works: { type: DataTypes.INTEGER },
  project_complete: { type: DataTypes.INTEGER },
  goals: { type: DataTypes.INTEGER }
})

const Goals = sequelize.define('goals', {
  name: { type: DataTypes.STRING, unique: true },
  point: { type: DataTypes.INTEGER, unique: true },
  desc: { type: DataTypes.TEXT },
  image: { type: DataTypes.STRING },
  point: { type: DataTypes.INTEGER }
})

const Levels = sequelize.define('levels', {
  name: { type: DataTypes.STRING },
  point: { type: DataTypes.INTEGER }
})



const About = sequelize.define('about', {
  about_video: { type: DataTypes.STRING },
  about_text: { type: DataTypes.TEXT }
})

const Contacts = sequelize.define('contacts', {
  email_one: { type: DataTypes.STRING },
  email_two: { type: DataTypes.STRING },
  email_three: { type: DataTypes.STRING },
  email_four: { type: DataTypes.STRING },
  number_one: { type: DataTypes.STRING },
  number_two: { type: DataTypes.STRING },
  link_insta: { type: DataTypes.STRING },
  link_whatsapp: { type: DataTypes.STRING },
  link_telegram: { type: DataTypes.STRING },
  link_youtube: { type: DataTypes.STRING }
})

const Categories = sequelize.define('categories', {
  name: { type: DataTypes.STRING, unique: true },
  slug: { type: DataTypes.STRING }
})

const Portfolio = sequelize.define('portfolios', {
  name: { type: DataTypes.STRING, unique: true },
  slug: { type: DataTypes.STRING },
  preview: { type: DataTypes.STRING },
  tags: { type: DataTypes.TEXT },
  bg: { type: DataTypes.STRING },
  type: { type: DataTypes.STRING },
  client: { type: DataTypes.STRING },
  deadline: { type: DataTypes.STRING },
  video: { type: DataTypes.STRING },
  backstage: { type: DataTypes.STRING },
  review: { type: DataTypes.STRING },
  goal: { type: DataTypes.STRING },
  work_time: { type: DataTypes.STRING },
  place: { type: DataTypes.STRING },
  environment: { type: DataTypes.STRING },
  theme: { type: DataTypes.STRING },
  price: { type: DataTypes.INTEGER },
  idea_photo: { type: DataTypes.STRING },
  idea_text: { type: DataTypes.TEXT },
})

const Portfolio_gallery = sequelize.define('portfolio_gallery', {
  source: { type: DataTypes.STRING },
  type: { type: DataTypes.INTEGER },  // 1 - изображение, 2 - youtube видео
  block: { type: DataTypes.INTEGER } // 1 - презентация, 2 - галерея
})

const Services = sequelize.define('services', {
  name: { type: DataTypes.STRING, unique: true },
  desc: { type: DataTypes.TEXT },
  image: { type: DataTypes.STRING, allowNull: true },
  type: { type: DataTypes.INTEGER } // 1 - на главной, 2 - в слайдер, 3 - в табы
})

const Services_groupe = sequelize.define('services_groups', {
  title: { type: DataTypes.STRING, unique: true },
  subtitle: { type: DataTypes.STRING },
  image: { type: DataTypes.STRING}
})

const Services_groupe_item = sequelize.define('services_group_items', {
  name: { type: DataTypes.STRING, unique: true },
  text: { type: DataTypes.TEXT }
})

const Partners = sequelize.define('partners', {
  name: { type: DataTypes.STRING },
  logo: { type: DataTypes.STRING },
  full_name: { type: DataTypes.STRING },
  desc: { type: DataTypes.TEXT },
  youtube_link: { type: DataTypes.STRING }
})

Users.hasOne(User_statistic)

Users.hasOne(User_goals)

Categories.hasMany(Portfolio)
Portfolio.belongsTo(Categories)

Portfolio.hasMany(Portfolio_gallery)

Services_groupe.hasMany(Services_groupe_item)

export default {
  Users,
  User_statistic,
  User_goals,
  Goals,
  Levels,
  About,
  Contacts,
  Categories,
  Portfolio,
  Portfolio_gallery,
  Services,
  Services_groupe,
  Services_groupe_item,
  Partners
}