angular.module('app.controllers', ['ionic.cloud'])

.controller('loginCtrl', ['$scope', '$rootScope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $rootScope, $stateParams, $state) {
    
    $rootScope.fullname = "Boosted Monkey";
    $rootScope.gender = "Male";
    $rootScope.major = "Monkey Science";
    $rootScope.year = "3rd year";
    $rootScope.email = "boostedmonkey";
    $rootScope.pass = "pogchamp";

    $rootScope.courses = [];
    $rootScope.groups = [];
        
    $scope.submit = function() {
        var user = $('#user').val();
        var password = $('#passwd').val();

        console.log(password, $rootScope.pass);
     
        if (password != $rootScope.pass) {
            $('#login-input2').addClass("red-border");
            $('#login-input2').focus();
        } else {
            if (user == $rootScope.email) {
                $('#login-input2').removeClass("red-border");
                $('#user').val('');
                $('#passwd').val('');
                $state.go('tabsController.dashboard');
            }
        }
    };
    
}])

.controller('signupCtrl', ['$scope', '$rootScope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $rootScope, $stateParams, $state) {
    $scope.submit = function() {
        $rootScope.fullname = $('#fullname').val();
        $rootScope.gender = $('#gender').val();
        $rootScope.major = $('#major').val();
        $rootScope.year = $('#year').val();

        $rootScope.email = $('#email').val();
        $rootScope.pass = $('#pass').val();
        var cpass = $('#cpass').val();
        console.log($rootScope.pass, cpass);
        if ($rootScope.pass != cpass) {
            $('#signup-input17').addClass("red-border");
            $('#signup-input17').focus();
        }
        else {
            $('#signup-input17').removeClass("red-border");
            
            $('#fullname').val('');
            $('#gender').prop('selectedIndex', 0);
            $('#major').val('');
            $('#year').prop('selectedIndex', 0);
            $('#email').val('');
            $('#pass').val('');
            $('#cpass').val('');
            $state.go('success');
        }
    };
}])

.controller('dashboardCtrl', ['$scope', '$stateParams', '$ionicPlatform', '$ionicPush', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicPlatform, $ionicPush) {
  $ionicPlatform.ready(function() {
    $ionicPush.register().then(function(t) {
      console.log('Token saved:', t.token);
    });
    $scope.$on('cloud:push:notification', function(event, data) {
      var msg = data.message;
      alert(msg.title + ': ' + msg.text);
    });
  });

}])

.controller('groupsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('profileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('editProfileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('successCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('groupChatCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])


.controller('courseListingCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])


.controller('addCourseCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
