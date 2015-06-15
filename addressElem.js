 var mainApp = angular.module("mainApp", []);
mainApp.directive('address', function() {
            var directive = {};
            directive.restrict = 'E';
            directive.templateUrl = "addTemp.html";
        return directive;
     });