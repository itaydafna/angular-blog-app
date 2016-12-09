(function () {
	// Your app starts here
    var app = angular.module('blogApp', ['ngRoute', 'ngSanitize']);

    app.config(function ($routeProvider) {

        // Setup routes logic
        $routeProvider
            .when('/', {
                redirectTo: '/posts'
            })
            .when('/posts/:page?', {
                templateUrl: 'app/posts/posts.view.html',
                controller: 'PostsCtrl',
                activeTab: 'posts',
                resolve: {
                    postsData: function (dataService) {
                        return dataService.get();
                    }
                }
            })
    });
}());



