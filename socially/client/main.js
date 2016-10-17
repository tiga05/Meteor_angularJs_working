import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

angular.module('socially', [
    angularMeteor,
    uiRouter
])

.controller('PartiesListCtrl', function($scope) {
    //'ngInject';

    $scope.helpers({
        parties() {
            return Parties.find({});
        }
    });
});
