const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      const response = h.response('Homepage');
      response.type('text/plain');
      response.header('Custom-Header', 'some-value');
      return response;
    },
  },
  {
    method: '*',
    path: '/',
    handler: (request, h) => {
      return 'Halaman tidak dapat diakses dengan method tersebut';
    },
  },
  {
    method: 'GET',
    path: '/about',
    handler: (request, h) => {
      return 'About page';
    },
  },
  {
    method: '*',
    path: '/about',
    handler: (request, h) => {
      return 'Halaman tidak dapat diakses dengan method';
    },
  },
  {
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request, h) => {
      const { name = 'stranger' } = request.params;
      const { lang } = request.query;

      if (lang === 'id') {
        return `Hai, ${name}!`;
      }
      return `Hello, ${name}!`;
    },
  },
  {
    method: 'POST',
    path: '/login',
    handler: (request, h) => {
      const { username, password } = request.payload;
      return `Welcome ${username}!`;
    },
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (request, h) => {
      return 'Halaman tidak ditemukan';
    },
  },
];

module.exports = routes;
