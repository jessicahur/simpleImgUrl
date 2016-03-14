/*
render = _$compile_(employeeTemplate): returns a function that can take in a scope
element = render(scope): returns a scope that has all props (?not sure yet) of the parent scope of the given directive
isoScope = element.isoscope() : returns an isolated scope as specified in the directive.js
*/
describe('img-post Component', () => {
  //Step 1: Mock your app
  beforeEach( angular.mock.module('imgApp') );

  //Step 2: Set up all variables inside the rootScope so that you can pass in
  var img1 = {
                url: 'http://media02.hongkiat.com/ww-flower-wallpapers/blueflowers.jpg',
                caption: 'blue flower'
              };

  var keys = Object.keys(img1);

  var scope, render, $httpBackend, resourceEmployee;

  function getElement(scope) { //need to have this function because we always have to call render and $digest after assigning new variables attached to scope
    const element = render( scope ); //we don't really need scope as args since this func has access to $scope outside, but I put it here for clarity purposes
    scope.$digest();//tells Angular that we just modified our scope
    return element; //So that we can create an isoScope later
  }

  const imgTemplate = `<img-post></img-post>`;

  //Step 3: Create a functional scope and have template compiled and attached to scope
  beforeEach( angular.mock.inject( function( _$rootScope_, _$compile_, _$httpBackend_, ImgService ) { //we don't need _wrapping_ here since we don't need to assign these to any other var that test need access to
    scope = _$rootScope_.$new();
    render = _$compile_(imgTemplate);
    $httpBackend = _$httpBackend_;

    resourceImg = new ImgService();
    keys.forEach(key => {
      resourceImg[key] = img1[key];
    });

  }));

  //Step 4: Tests
  it('should successfully post an img to server', () => {

    $httpBackend.expect('POST', 'http://localhost:3000/api/v1/images')
                .respond(200, img1);
    scope.imgs = [];
    scope.url = img1.url;
    scope.caption = img1.caption;
    const element = getElement(scope);

    scope.post();

    $httpBackend.flush(); // CAN'T STRESS ENOUGH: NEED TO DO "FLUSH" AFTER A FUNCTION THAT DO HTTP REQUEST!!!!!!

    assert.equal(scope.imgs.length, 1);

    keys.forEach(key => {
      assert.equal(scope.imgs[0][key], img1[key]);
    });

  });

});
