(function () {
    'use strict';

    var app = angular.module('blogApp');

    /**
     * Handle posts list
     */


    app.controller('PostsCtrl',['$scope','$routeParams','$log','$route','$filter','appStates','postsData','utils',
        function($scope,$routeParams,$log,$route,$filter,appStates,postsData,utils){
            $log.debug('PostsCtrl');

            var posts,
                // Limit number of visible posts
                limit = 3,
                // Get the page number
                pageNum = parseInt($routeParams.page, 10) || 1;

    /**
     * Setup
     */

    // Sets the active Nav item
            appStates.nav.activeTab = $route.current.activeTab;

            $scope.limit = limit;
            $scope.pageNum = pageNum;

    //Set helpers
            $scope.utils = utils;

    /**
     * Preapre the posts data
     */

        posts = $filter('orderBy')(postsData.posts, '-date');

        $scope.posts = posts;

        }]
    );
}());

