angular.module('app.controllers', ['ionic.cloud'])

.controller('loginCtrl', ['$scope', '$rootScope', '$stateParams', '$state',
function ($scope, $rootScope, $stateParams, $state) {

    $rootScope.fullname = "Boosted Monkey";
    $rootScope.gender = "Male";
    $rootScope.major = "Monkey Science";
    $rootScope.year = "3rd year";
    $rootScope.email = "boostedmonkey";
    $rootScope.pass = "pogchamp";

    $rootScope.courses = [ { name: "No courses yet", tier: "" } ];
    $rootScope.groups = [ { name: "No groups yet", tier: "" } ];
    $rootScope.notifs = [ { text: "Nothing yet!" } ];

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

.controller('signupCtrl', ['$scope', '$rootScope', '$stateParams', '$state',
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

.controller('dashboardCtrl', ['$scope', '$stateParams', '$ionicPlatform', '$ionicPush', '$http',
function ($scope, $stateParams, $ionicPlatform, $ionicPush, $http) {
  $ionicPlatform.ready(function() {
    $ionicPush.register().then(function(t) {
      $http.get('https://2d5cb4bf.ngrok.io/reg/' + t.token)
      .success(function() {
          console.log('Token registered');
      })
      .error(function() {
          console.log('ERROR! Token registration failed');
      });
    });
    $scope.$on('cloud:push:notification', function(event, data) {
      var msg = data.message;
      alert(msg.title + ': ' + msg.text);
    });
  });

}])

.controller('groupsCtrl', ['$scope', '$rootScope', '$stateParams', '$state',
function ($scope, $rootScope, $stateParams, $state) {

}])

.controller('profileCtrl', ['$scope', '$rootScope', '$stateParams', '$state',
function ($scope, $rootScope, $stateParams, $state) {


}])

.controller('editProfileCtrl', ['$scope', '$rootScope', '$stateParams', '$state',
function ($scope, $rootScope, $stateParams, $state) {


}])

.controller('successCtrl', ['$scope', '$rootScope', '$stateParams', '$state',
function ($scope, $rootScope, $stateParams, $state) {


}])

.controller('groupChatCtrl', ['$scope', '$rootScope', '$stateParams', '$state',
function ($scope, $rootScope, $stateParams, $state) {
    console.log($stateParams.id);
    $scope.title = $stateParams.id + " Chat";

}])

.controller('addCourseCtrl', ['$scope', '$rootScope', '$stateParams', '$state', '$http',
function ($scope, $rootScope, $stateParams, $state, $http) {
    $scope.data = { tier: 0 };
    $scope.tierList = [{ text: "Tier 1: I just want some extra practice", id: 1},
                       { text: "Tier 2: I just want to work on homework together", id:2},
                       { text: "Tier 3: I don't understand anything - send help", id:3}];
    $scope.addCourse = function() {
        var courseName = $('#course').val() + ' ' + $('#coursenum').val();
        var mentor = $('#mentor').val();
        var hrs = $('#time').val();
        var grp = $('#group').val();
        var courseInfo = { 'name': courseName, 'tier': "Tier " + $scope.data.tier, 'mentor': mentor, 'hrs': hrs, 'group': grp }
        if ($rootScope.courses[0].tier == '') {
            $rootScope.notifs = [];
            $rootScope.courses = [];
        }
        $rootScope.courses.push(courseInfo);
        $rootScope.notifs.push({ text: "You added course " + courseName });
        console.log($rootScope.courses);

        $('#course').prop('selectedIndex', 0);
        $('#mentor').prop('selectedIndex', 0);
        $('#time').val('');
        $('#group').val('');

        $http({
          url: 'https://2d5cb4bf.ngrok.io/groups/create',
          method: 'POST',
          data: courseInfo,
          headers: {'Content-Type': 'application/json'}
        });

        $state.go("tabsController.editProfile");
    }

}])
