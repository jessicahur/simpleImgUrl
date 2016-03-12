//angulat modules
import angular from 'angular';
import ngResource from 'angular-resource';

//My modules
import services from '../services';
import components from '../components';

var baseUrl = BASE_URL;

export default angular.module( 'employeeApp', [ ngMessages,
                                               ngResource,
                                               components,
                                               services]);
