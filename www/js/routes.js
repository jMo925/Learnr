angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('tabsController', {
    url: '/tabs',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('tabsController.dashboard', {
    url: '/dashboard',
    views: {
      'tab1': {
        templateUrl: 'templates/dashboard.html',
        controller: 'dashboardCtrl'
      }
    }
  })

  .state('tabsController.groups', {
    url: '/groups',
    views: {
      'tab2': {
        templateUrl: 'templates/groups.html',
        controller: 'groupsCtrl'
      }
    }
  })

  .state('tabsController.profile', {
    url: '/profile',
    views: {
      'tab3': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('tabsController.editProfile', {
    url: '/editprofile',
    views: {
      'tab3': {
        templateUrl: 'templates/editProfile.html',
        controller: 'editProfileCtrl'
      }
    }
  })

  .state('tabsController.courseListing', {
    url: '/courseListing',
    views: {
      'tab3': {
        templateUrl: 'templates/courseListing.html',
        controller: 'courseListingCtrl'
      }
    }
  })

  .state('success', {
    url: '/success',
    templateUrl: 'templates/success.html',
    controller: 'successCtrl'
  })

  .state('tabsController.groupChat', {
    url: '/chat/:id',
    views: {
      'tab2': {
        templateUrl: 'templates/groupChat.html',
        controller: 'groupChatCtrl'
      }
    }
  })

  .state('tabsController.addCourse', {
    url: '/addCourse',
    views: {
      'tab3': {
        templateUrl: 'templates/addCourse.html',
        controller: 'addCourseCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/login')

  

});
