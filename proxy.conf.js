const PROXY_CONFIG = [
    {
      context: ['/api'],
      target: 'http://127.0.0.1/vivah_rest',
      secure: false,
      logLevel: 'debug',
      pathRewrite: {'^/api' : ''}
    }
  ];

  module.exports = PROXY_CONFIG;



 /* const PROXY_CONFIG = [
    {
      context: ['/rest'],
      target: 'http://energy.kentec.com.br',
      secure: false,
      logLevel: 'debug',
      pathRewrite: {'^/rest' : ''}
    }
  ];

  module.exports = PROXY_CONFIG;*/