export default function(angularModule) {
  var baseUrl = BASE_URL;
  function create(name, url) {
      angularModule.factory(name, function($resource, baseUrl) {
              return $resource(`${baseUrl}${url}`, {});
      });
  }

  create('ImgService', '/api/v1/images');

};
