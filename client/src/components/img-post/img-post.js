import template from './img-post.html';

export default function(AngularModule) {
  AngularModule.directive('imgPost', function() {
    return {
      replace: true, //replace this element with content from this directive's html template
      restrict: 'E', //restrict this directive to be html tag element
      template,
      controller: function($scope, ImgService) {
        $scope.post = function() {
          var img = new ImgService();
          img.caption = $scope.caption;
          img.url = $scope.url;
          img.$save(savedImg => {
            console.log(savedImg);
          });
        }
      }
    }//end of return
  })
}
