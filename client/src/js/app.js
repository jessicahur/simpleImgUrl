import angular from 'angular';

import services from '../services';
import components from '../components';

import ngResource from 'angular-resource';
import uiRouter from 'angular-ui-router';

var baseUrl = BASE_URL;

export default angular.module( 'employeeApp', [ ngMessages,
                                               ngResource,
                                               uiRouter,
                                               components,
                                               services]);
