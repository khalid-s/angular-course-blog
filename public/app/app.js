var blog = angular.module('blog', ['ngRoute']);

blog.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'view/home.html',
        controller: 'homeController'
    })
    .when('/blog/article/add', {
        templateUrl: 'view/article/form.html',
        controller: 'addArticleController'
    })
    .when('/blog/article/update/:id', {
        templateUrl: 'view/article/form.html',
        controller: 'updateArticleController'
    })
    .when('/blog/article/delete/:id', {
        templateUrl: 'view/article/delete.html',
        controller: 'deleteArticleController'
    })
    .when('/blog/article/:id', {
        templateUrl: 'view/article.html',
        controller: 'getArticleController'
    })
    .when('/about', {
        templateUrl: 'view/about.html',
        controller: 'aboutController'
    })
    .otherwise({ redirectTo: '/' });
});