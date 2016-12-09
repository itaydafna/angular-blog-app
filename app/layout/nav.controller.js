(function () {
    'use strict';

    var app = angular.module('blogApp');

    app.controller('NavCtrl', function ($log, $scope, appStates) {
        $log.debug('NavCtrl');

        /**
         * Setup
         */

        $scope.tabs = [
            {
                name: 'Posts',
                code: 'posts'
            },
            {
                name: 'Admin',
                code: 'admin'
            }
        ];

        $scope.navState = appStates.nav;
        console.log($scope.navState);
    });
}());
