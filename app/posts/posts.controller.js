(function () {
    'use strict';

    var app = angular.module('blogApp');

    app.controller('PostsCtrl',['$scope','$routeParams','$log','$route','appStates',
        function($scope,$routeParams,$log,$route,appStates){
            $log.debug('PostsCtrl')
            console.log();
            appStates.nav.activeTab = $route.current.activeTab;
            console.log(appStates);

        }]
    );
}());

