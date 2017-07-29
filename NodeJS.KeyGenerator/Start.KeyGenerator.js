//DEPENDENCIA: Módulos NodeJS
const jwt = require("jwt-simple");
const moment = require('moment');
const fs = require("fs");
const package = require("./package.json");
//DEPENDENCIA: commands CMD
const cmd = require("./KeyGenerator.Cmd/commandCMD");
//DEPENDENCIA: Certificado de Encriptación SSL
const cert = fs.readFileSync(__dirname + '/KeyGenerator.AuthService/SSL/serialkey-generator.crt').toString('ascii');
//DEPENDENCIA: TokenGenerator
const tokenService = require("./KeyGenerator.AuthService/TokenService");
const config = require('./KeyGenerator.Config/config');
//DEPENDENCIA: DTO
const inputDataToCrypt = require("./KeyGenerator.DTO/inputDataToCryptDTO");
//VARIABLES GLOBALES
const delayToClose = 30;

try {
	printHeader();
	console.log();

	console.log("1 - Datos de Entrada [Objeto: inputDataToCryptDTO]:");
	console.log();
	console.log(inputDataToCrypt);
	console.log();
	console.log("=============================================");

	let keyActivation = tokenService.createKeyToken(jwt, moment, config, fs, inputDataToCrypt);

	console.log("4 - Desencriptando Key-Token y validando SSL y Firma de Encriptacion...");

	let payload = tokenService.decodeToken(jwt, config, cert, keyActivation);

	console.log("    Decodificacion: [SUCCESS]");
	console.log();
	console.log("    Key-Token Data: ");
	console.log();
	console.log(payload);
	console.log();

	if(payload.exp <= moment().unix()){
		console.log("5 - La Licencia no es valida o ha expirado.");
	return;
} else {
		console.log("======================================================");
		console.log("5 - La Licencia se ha validado y generado correctamente!");
		console.log();
		console.log("LICENCIA DE SOFTWARE: ");
		console.log();
		console.log(keyActivation);
		console.log();
		console.log("=============================================");

		console.log("6 - Generando archivo de licencia...");

		let fileName = inputDataToCrypt.sub + ' - SerialKey.txt';
		let logger = fs.createWriteStream(fileName);
		logger.write(keyActivation);
		logger.end();

		console.log();
		console.log("    Estado: [SUCCESS]");
		console.log("    Archivo de licencia generado correctamente!");
		console.log();

		console.log("=============================================");
		console.log("7 - Leyendo archivo generado [" + fileName + "]:");

		fs.readFile(fileName, 'utf8', function(err, data) {
		  if (err) throw err;
			console.log();
		  console.log('    Lectura: [' + fileName + "] [SUCCESS]");
			console.log();
		  console.log(data);
			console.log();

			console.log("    Validando datos generados ...");console.log();
			let payload_DataFile = tokenService.decodeToken(jwt, config, cert, data);

			console.log(payload);
			console.log();
			console.log(payload_DataFile);
			console.log();

			if( JSON.stringify(payload) === JSON.stringify(payload_DataFile) ){
				console.log("    Estado: [SUCCESS]");
				console.log("    El Serial Key Generado v/s El Serial Key existente en el archivo, Ha sido validado correctamente!");
				console.log();
			} else{
				console.log("    Estado: [FAILED]");
				console.log("    El Serial Key Generado v/s El Serial Key existente en el archivo, Es erroneo");
				console.log();
			}
			printHeader();
			console.log();
		});

		console.log();

		cmd.executeCommand('dir /s | find "SerialKey.txt"');
		cmd.executeCommand('ping localhost -n ' + delayToClose + ' >nul ');
		}
} catch (ex) {
	console.log("ERROR: " + ex.message);
}

function printHeader(){
	console.log("####################################################");
	console.log("#  Generador de Licencias de Software (Key-Token)");
	console.log("#  Proyecto: " + package.name);
	console.log("#  Versión: " + package.version);
	console.log("#  Descripción: " + package.description);
	console.log("#  Autor: " + package.author);
	console.log("#  Contacto: " + package.contact);
	console.log("#  Licencia: " + package.license);
	console.log("#  Publicación: " + package.pub);
	console.log("#####################################################");
};
