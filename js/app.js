var app=angular.module('photoMF',['ngRoute']);
// Configuración de las rutas
app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl	: 'template/home.html',
            controller 	: 'homeController'
        })
        .when('/galeria', {
            templateUrl : 'template/galeria1.html',
            controller 	: 'galeriaController'
        })
        .when('/galeria2', {
            templateUrl : 'template/galeria2.html',
            controller  : 'galeriaController'
        })
        .when('/aboutme', {
            templateUrl : 'template/aboutme.html',
            controller 	: 'aboutmeController'
        })
        .otherwise({
            redirectTo: '/'
        });
}
]);

app.controller('homeController', function($scope) {
    $scope.message = 'Hola, Mundo!';
});

app.controller('galeriaController', function() {
    /*$scope.message = 'Esta es la página "Acerca de"';*/
    this.galerias = dataGalleries;
});
/*
app.controller('contactController', function($scope) {
    $scope.message = 'Esta es la página de "Contacto", aquí podemos poner un formulario';
});*/
var dataGalleries = [
    {
        title: 'Recient Gallery',
        subtitle: 'My life in Costa Rica',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        title: 'Artistic Gallery',
        subtitle: 'travel around the world',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }
];
