exports.createKeyToken = function(jwt, moment, config, fs, payload) {
  const key = fs.readFileSync(__dirname + '/SSL/serialkey-generator.key').toString('ascii');
  const cert = fs.readFileSync(__dirname + '/SSL/serialkey-generator.crt').toString('ascii');
  const algoritmo = 'RS256';

  console.log();
  console.log("2 - Aplicando encriptacion LVL 1: ");
  console.log("    KEY de Encriptacion LVL 1: ");
  console.log();
  console.log(config.TOKEN_SECRET_KEY_GENERATOR);
  console.log();
  //GENERAR TOKEN LVL1
  let token_lvl1 = jwt.encode(payload, config.TOKEN_SECRET_KEY_GENERATOR);

  console.log("3 - Aplicando encriptacion [" + algoritmo + "] LVL 2 (SSL): ");
  console.log("    KEY de Encriptacion [" + algoritmo + "]: ");
  console.log();
  console.log(key);
  console.log();
  //GENERAR TOKEN LVL2 SSL
  let token_lvl2_ssl = jwt.encode(token_lvl1, key, algoritmo, config.TOKEN_SECRET_KEY_GENERATOR);

  console.log("    Estado: [SUCCESS]");
  console.log("    Licencia de Producto generado correctamente!");
  console.log("================================================");
  console.log();
  return token_lvl2_ssl;
};

exports.decodeToken = function(jwt, config, cert, token){
  //DESENCRIPTACIÓN Y VALIDACION - OBTENER KEY-TOKEN LVL2 SSL
  let token_lvl2_ssl = token;
  //DECODIFICAR KEY-TOKEN LVL2 SSL
  let token_lvl1 = jwt.decode(token_lvl2_ssl, cert);
  //DECODIFICAR KEY-TOKEN LVL1
  let keyTokenSimple = token_lvl1; //request.body.Auth.Token;
  let payload = jwt.decode(keyTokenSimple, config.TOKEN_SECRET_KEY_GENERATOR);
  return payload;
};
