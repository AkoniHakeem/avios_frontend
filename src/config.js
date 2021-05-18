/* 
 * Manges the environments variable
*/

//  Dependencies
const config = {}

config.environments = {
    "development" : {
        avios_BACKENDURL: process.env.backendUrl || "http://localhost:3001"
    },
    "staging" : {
        avios_BACKENDURL: process.env.backendUrl || "http://localhost:3001"
    },
    "production" : { // We should set the https port always here
        avios_BACKENDURL: process.env.AVIOS_BACKEND_URL || "https://avios-backend-xsfgf.ondigitalocean.app"
    }
}

const envName = process.env.NODE_ENV? process.env.NODE_ENV.trim().toLocaleLowerCase() : "staging";
const environment = typeof(config.environments[envName]) == "object"? config.environments[envName] : config.environments.staging ;

module.exports = environment   