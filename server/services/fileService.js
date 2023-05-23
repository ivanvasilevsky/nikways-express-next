import * as uuid from 'uuid'
import * as path from 'path'
import fs from 'fs'

class fileService {
  saveFile(folder, folderItem, file) {
    try {
      const fileFormat = file.mimetype.split('/')[1]
      const fileName = uuid.v4() + `.${fileFormat}`

      let pathStroke

      if (!folderItem) {
        pathStroke = `static/${folder}`
      }

      if (folderItem) {
        pathStroke = `static/${folder}/${folderItem}`

        if (!fs.existsSync(pathStroke)) {
          fs.mkdirSync(`static/${folder}/${folderItem}`)
        }
      }

      const filePath = path.resolve(pathStroke, fileName)
      file.mv(filePath)
      return fileName

    } catch (e) {
      console.log(e)
    }
  }

  deleteFile(folder, folderItem, file) {
    try {

      let pathStroke

      if (!folderItem) {
        pathStroke = `static/${folder}`
      }

      if (folderItem) {
        pathStroke = `static/${folder}/${folderItem}`
      }

      const filePath = path.resolve(pathStroke, file)
      fs.unlinkSync(filePath)
      return 1
    } catch (e) {
      console.log(e)
      return 0
    }
  }

  deleteFolder(folder, folderItem) {
    try {
      fs.rmdirSync(`static/${folder}/${folderItem}`)
    } catch (e) {
      console.log(e)
      return 0
    }
  }
}

export default new fileService