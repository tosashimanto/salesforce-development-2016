var app = angular.module("Services", []);

// AngularAccountListServices
app.factory("AngularAccountListServices", ["$rootScope", function($rootScope) {
    // 初期処理
    function init(scope) {
        AngularAccountController.getAccounts(
            function(results, event) {
                if(event.status) {
                    console.log(results);
                    scope.results = results;
                } else {
                    alert(event.message);
                }
                $rootScope.$apply();
            },
            { buffer: true, escape: false, timeout: 30000 }
        );
    }
    return {
        init: function(scope) {
            return init(scope);
        }
    };
}]);