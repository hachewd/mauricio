var app=angular.module('photoMF',['ngRoute','ngAnimate']);
// Configuración de las rutas
app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl	: 'template/home.html',
            controller 	: 'homeController'
        })
        .when('/galeria2', {
            templateUrl : 'template/galeria1.html',
            controller 	: 'galeriaController'
        })
        .when('/galeria1', {
            templateUrl : 'template/galeria1.html?id=1',
            controller  : 'galeriaController'
        })
        .when('/aboutme', {
            templateUrl : 'template/aboutme.html',
            controller 	: 'aboutmeController'
        })
        .when('/events', {
            templateUrl : 'template/events.html',
            controller  : 'eventsController'
        })
        .otherwise({
            redirectTo: '/'
        });
}
]);

app.controller('homeController', function($scope) {
    $scope.message = 'Hola, Mundo!';
});
app.controller('categController',function(){
    this.categorias = dataGalleries;
});
app.controller('galeriaController', function() {
    /*$scope.message = 'Esta es la página "Acerca de"';*/
});

app.controller('galeriaCtrl', function() {
    /*$scope.message = 'Esta es la página "Acerca de"';*/
    this.galerias = dataGalleries;

});
