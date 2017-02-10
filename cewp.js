function testCtl($scope) {
    var vm = $scope;
    vm.people = [];

    vm.clear = function () {
        vm.people = [];
    };

    vm.submit = function () {
        alert('Form Submitted OK');
    };
}


angular.module('testApp', ['sp-peoplepicker'])
    .controller('testCtl', testCtl);