import angular from 'angular';

import imgDisplay from './img-display/img-display';
import imgPost from './img-post/img-post';

var components = angular.module('components', []);

imgDisplay(components);
imgPost(components);

export default components.name;
