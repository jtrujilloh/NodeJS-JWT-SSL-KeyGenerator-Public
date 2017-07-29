module.exports = {
  TOKEN_SECRET_KEY_GENERATOR: process.env.TOKEN_SECRET_PRIVATE_OPERATIONS_ENV || "@#99*MI_CLAVE_SECRETA_LVL1*99#@.#28.07.2017#.123456789",
  TOKEN_KEY_GENERATOR_EXPIRATION_TIME: 1,
  TOKEN_KEY_GENERATOR_INTERVAL: "years",
};

/*
https://momentjs.com/docs/

Key				Shorthand
years			y
quarters		Q
months			M
weeks			w
days			d
hours			h
minutes			m
seconds			s
milliseconds	ms
*/
