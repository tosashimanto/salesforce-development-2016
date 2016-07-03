angular.module("myApp", ["Controllers", "ngRoute", "ngMessages"]).config(["$routeProvider", function($routeProvider){
    $routeProvider.when("/", {
        controller : "AngularAccountListCtrl",
        templateUrl : "/apex/AngularAccountList"
    }).
    otherwise({
        redirectTo: "/"
    });
}]);