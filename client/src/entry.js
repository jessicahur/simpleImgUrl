//angulat modules
import angular from 'angular';
import ngResource from 'angular-resource';

//My modules
import services from './services';
import components from './components';
import ImgController from './js/ImgController';

export default angular.module( 'imgApp', [ ngResource,
                                           components,
                                           services])
                      .controller('ImgController',ImgController);
