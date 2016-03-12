import template from './img-display.html';

export default function(AngularModule) {
  AngularModule.directive('imgDisplay', function() {
    return {
      replace: true, //replace this element with content from this directive's html template
      restrict: 'E', //restrict this directive to be html tag element
      template,
      scope: {
        url: '@',
        caption: '@'
      }
    }//end of return
  })
}
