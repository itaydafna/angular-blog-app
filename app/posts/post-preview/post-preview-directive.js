(function () {

    var app = angular.module('blogApp');

    app.directive('postPreview', function () {
        return {
            templateUrl: "app/posts/post-preview/post-preview.view.html",
            scope: {
                title: '@',
                author: '@',
                description:'@',
                date: '@',
                tags:'='
            }
            // controller: postPreviewController,
            // controllerAs: "vm"
        };

        // function classifiedCardController($state, $scope, $mdDialog) {
        //
        // }
    })
}());
