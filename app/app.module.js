(function () {
	// Your app starts here
    var app = angular.module('blogApp', ['ngRoute', 'ngSanitize'])

    .config(['$routeProvider',function($routeProvider){
        // Setup routes logic
        $routeProvider
            .when('/', {
                redirectTo: 'posts'
            })
            .when('/posts/:page?', {
                templateUrl: 'app/posts/posts.view.html',
                controller: 'PostsCtrl',
                activeTab: 'posts',
                //I need an explanation on how this works..
                resolve: {
                    postsData: function (dataService) {
                        return dataService.get();
                    }
                }
            })
            .when('/post/:title', {
                templateUrl: 'app/posts/post.view.html',
                controller: 'PostCtrl',
                activeTab: 'posts',
                //I need an explanation on how this works..
                resolve: {
                    postData: function ($route,dataService) {
                        var title = $route.current.params.title;
                        return dataService.getById(title);
                    }
                }
            })
            .when('/admin',{
                templateUrl: 'app/admin/admin.view.html',
                controller: 'AdminCtrl',
                activeTab: 'admin'
            })
    }]);

}());



