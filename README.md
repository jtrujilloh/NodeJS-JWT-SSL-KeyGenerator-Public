# NodeJS JWT SSL KeyGenerator Public

Aplicación NodeJS, que permite generar tokens para la validación de software, éstos token's pueden ser utilizados para multiples propósitos, ejemplo: Claves de Activación, Seriales de Software, Llaves únicas, etc...

Las Serial Key son generadas aplicando algoritmos de encriptación provenientes de:

- Encriptación LVL1: jwt-simple (Configurable)
- Certificado SSL RSA:2048Kb

- Ejecución mediante BAT File:
![alt text](https://github.com/jtrujilloh/NodeJS-JWT-SSL-KeyGenerator-Public/blob/master/000%20-%20Start.JPG)

- DTO para Transportar Objeto JSON a Encriptar 1/3:
![alt text](https://github.com/jtrujilloh/NodeJS-JWT-SSL-KeyGenerator-Public/blob/master/008%20-%20DTO%20Transport.JPG)

- DTO para Transportar Objeto JSON a Encriptar 2/3:
![alt text](https://github.com/jtrujilloh/NodeJS-JWT-SSL-KeyGenerator-Public/blob/master/009%20-%20DTO%20Transport.JPG)

- DTO para Transportar Objeto JSON a Encriptar 3/3:
![alt text](https://github.com/jtrujilloh/NodeJS-JWT-SSL-KeyGenerator-Public/blob/master/011%20-%20DTO%20Transport.JPG)

- Ejecución 1/5:
![alt text](https://github.com/jtrujilloh/NodeJS-JWT-SSL-KeyGenerator-Public/blob/master/001%20-%20Excec.JPG)

- Ejecución 2/5:
![alt text](https://github.com/jtrujilloh/NodeJS-JWT-SSL-KeyGenerator-Public/blob/master/002%20-%20Excec.JPG)

- Ejecución 3/5:
![alt text](https://github.com/jtrujilloh/NodeJS-JWT-SSL-KeyGenerator-Public/blob/master/003%20-%20Excec.JPG)

- Ejecución 4/5:
![alt text](https://github.com/jtrujilloh/NodeJS-JWT-SSL-KeyGenerator-Public/blob/master/004%20-%20Excec.JPG)

- Ejecución 5/5:
![alt text](https://github.com/jtrujilloh/NodeJS-JWT-SSL-KeyGenerator-Public/blob/master/005%20-%20Excec.JPG)

- OpenSSL - Generación de Archivos de Certificado 1/2:
![alt text](https://github.com/jtrujilloh/NodeJS-JWT-SSL-KeyGenerator-Public/blob/master/006%20-%20PowerShell%20(x86).JPG)

- OpenSSL - Generación de Archivos de Certificado 2/2:
![alt text](https://github.com/jtrujilloh/NodeJS-JWT-SSL-KeyGenerator-Public/blob/master/007%20-%20Claves%20y%20Certificados.JPG)

- Esta versión utiliza JWT-Simple (Incluido en los Fuentes) y Certificados SSL.

Para poder generar los archivos de certificado SSL, es necesario descargar e instalar la última versión de OpenSSL, desde su web Oficial:

- Link: https://www.openssl.org/

--------------------------------------------------------------------------------------------------

Para generar los componentes de Certificado SSL, los comandos son los siguientes:

- openssl req -new -newkey rsa:2048 -nodes -keyout serialkey-generator.key -out serialkey-generator.csr -config "C:\openssl-0.9.8h\openssl.cnf"

OpenSSL> req -new -newkey rsa:2048 -nodes -keyout serialkey-generator.key -out serialkey-generator.csr -config "C:\openssl-0.9.8h\openssl.cnf"

Ejemplo:

	Country Name (2 letter code) [AU]:CL
	State or Province Name (full name) [Some-State]:RM
	Locality Name (eg, city) []:Santiago
	Organization Name (eg, company) [Internet Widgits Pty Ltd]:SerialKey-Generator
	Organizational Unit Name (eg, section) []:.
	Common Name (eg, YOUR name) []:SerialKey-Generator
	Email Address []:jtrujillo@2tec.cl

	Please enter the following 'extra' attributes
	to be sent with your certificate request
	A challenge password []:
	An optional company name []:


- openssl x509 -req -days 365 -in serialkey-generator.csr -signkey serialkey-generator.key -out serialkey-generator.crt

Ejemplo:

	OpenSSL> x509 -req -days 365 -in serialkey-generator.csr -signkey serialkey-generator.key -out serialkey-generator.crt
	Loading 'screen' into random state - done
	Signature ok
	subject=/C=CL/ST=RM/L=Santiago/O=SerialKey-Generator/CN=SerialKey-Generator/emailAddress=jtrujillo@2tec.cl
	Getting Private key
	OpenSSL>
