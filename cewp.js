function testCtl($scope) {
    var vm = $scope;
    vm.people = [];

    vm.clear = function () {
        vm.people = [];
    };
}


angular.module('testApp', ['sp-peoplepicker'])
    .controller('testCtl', testCtl);