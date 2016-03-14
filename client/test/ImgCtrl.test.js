describe('ImgCtrl', () => {
  beforeEach( angular.mock.module( 'imgApp' ));

  var $controller, $scope, $httpBackend, $window, $auth, mockResource;

  var obj = {
                url: 'http://testImage.test.png'
              };
  var keys = Object.keys(obj);

  beforeEach( angular.mock.inject( function(_$rootScope_, _$controller_, _$httpBackend_) { //we wrap these dependencies with underscore because we need to pass them to the declared vars $controller (for example) so that the tests will have access to it
    $controller = _$controller_;
    $scope = _$rootScope_.$new();//use rootScope instead of {} because we may set $rootScope.user = 'Something'
    $httpBackend = _$httpBackend_;
  }));

  it('GET', () => {
    $httpBackend.expect('GET', 'http://localhost:3000/api/v1/images')
                .respond(200, [obj]);
    $controller('ImgController', {$scope});
    $httpBackend.flush();

    var props = Object.keys(obj);
    props.forEach(prop => {
      assert.equal($scope.imgs[0].prop, obj.prop);
    });
});

});
