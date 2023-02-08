const fs = require("fs-extra")
const path = require("path")

const cypressConfigResolverByFile = filename => {
    const pathToConfigFile = path.resolve(`cypress/fixtures/${filename}.json`)
    const config = fs.readJsonSync(pathToConfigFile)
    config.environment = filename
    return config
}
const cypressConfigResolver = () =>
    cypressConfigResolverByFile(process.env.ENVIRONMENT || "pro")

module.exports.cypressConfigResolver = cypressConfigResolver