/* JWT - JSON Web Token
Las propiedades [sub, iat, exp] no deben modificarse,
ya que son utilizados por el componente jwt-simple.

Nota: Puedes eliminar la Fecha de Expiración [exp] si no necesitas
validar expiraciones, recuerda modificar [TokenService.js] para ésto.
*/

const moment = require('moment');
const config = require('../KeyGenerator.Config/config');

module.exports = {
  sub: "jtrujillo@2tec.cl", //Identificador Único
  IdUsuario: 452774, //Propiedad según necesidades
  IdSistemaSoftware: 3012, //Propiedad según necesidades
  IdTipoLicencia: 1002, //Propiedad según necesidades
  iat: moment().unix(), //Fecha de Creación del Key-Token (en Formato UNIX)
  exp: moment().add(config.TOKEN_KEY_GENERATOR_EXPIRATION_TIME, config.TOKEN_KEY_GENERATOR_INTERVAL).unix(), //Fecha de Expiración del KeyToken (en Formato UNIX)
};
