(function () {
    'use strict';

    var app = angular.module('blogApp');

    app.controller('AdminCtrl',['$scope','$routeParams','$log','$route','appStates',
        function($scope,$routeParams,$log,$route,appStates){
            $log.debug('AdminCtrl');
            appStates.nav.activeTab = $route.current.activeTab;
            console.log(appStates);

        }]
    );
}());
