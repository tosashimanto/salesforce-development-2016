(function(){
    "use strict";

    var app = angular.module("Controllers", ["Services"]);

    // 例外処理
    app.factory("$exceptionHandler", function () {
        return function (exception, cause) {
            console.log(exception.message);
            var msg = "画面の処理中にエラーが発生しました。" + "ご迷惑をおかけしております。";
            alert(msg);
        };
    });

    // AngularAccountListCtrl
    app.controller("AngularAccountListCtrl", ["$scope", "AngularAccountListServices", "$route", function($scope, services, $route) {
        try {
            services.init($scope);
        } catch (e) {
            throw e;
        }
    }])
})();