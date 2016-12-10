(function () {
    'use strict';

    var app = angular.module('blogApp');

    /**
     * Handle single post view
     */

    app.controller('PostCtrl',
        function ($log, $scope, $http, $route, postData, appStates, utils, marked) {
            $log.debug('PostCtrl');

            /**
             * Setup
             */

            appStates.nav.activeTab = $route.current.activeTab;

            $scope.utils = utils;
            $scope.post = postData;

            /**
             * Get the post HTML output (from a file URL)
             */

            if (postData.mdSource) {
                $scope.postHtml = marked.convert(postData.mdSource);
            }
            else if (postData.htmlPath) {
                $http.get(postData.htmlPath)
                    .success(function (data) {
                        $scope.postHtml = data;
                    });
            }
        });
}());

