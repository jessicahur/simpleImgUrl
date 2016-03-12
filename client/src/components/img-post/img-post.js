import template from './img-post.html';

export default function(AngularModule) {
  AngularModule.directive('imgPost', function() {
    return {
      replace: true, //replace this element with content from this directive's html template
      restrict: 'E', //restrict this directive to be html tag element
      template,
      controller: function($scope) {

      }
    }//end of return
  })
}
