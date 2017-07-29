# NodeJS JWT SSL KeyGenerator Public

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
