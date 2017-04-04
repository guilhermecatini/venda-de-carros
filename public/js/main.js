'use strict'

angular.module('AppVendas', ['ngRoute', 'toastr', 'ngAlertify', /*'ui.utils.masks',*/ /*'ngMask',*/ 'angularUtils.directives.dirPagination'])

.constant('MyConfig', {
  ApiUrl: "http://172.16.2.28:8888/api/v1"
})

// cria uma diretiva OnEnterPress
.directive('onEnterPress', function () {
  return function (scope, element, attrs) {
    element.bind("keydown keypress", function (event) {
      if(event.which === 13) {
        scope.$apply(function (){
          scope.$eval(attrs.onEnterPress)
        })
        event.preventDefault()
      }
    })
  }
})

/*
// exibir ocultar gif de carregando
.directive('loading',   ['$http' ,function ($http) {
  return {
    restrict: 'A',
    link: function (scope, elm, attrs) {
      scope.isLoading = function () {
        return $http.pendingRequests.length > 0;
      }
      scope.$watch(scope.isLoading, function (v) {
        if(v) {
          $(elm).show()
        } else {
          $(elm).hide()
        }
      })
    }
  }
}])*/

// StrPadLeft
.filter('strPadLeft', function () {
  return function (n, len) {
    var num = parseInt(n, 10)
    len = parseInt(len, 10)
    if (isNaN(num) || isNaN(len)) {
      return n
    }
    num = ''+num;
    while (num.length < len) {
      num = '0'+num;
    }
    return num;
  }
})

.config(function(toastrConfig) {
  angular.extend(toastrConfig, {
    autoDismiss: true,
    containerId: 'toast-container',
    maxOpened: 1,    
    newestOnTop: true,
    positionClass: 'toast-top-left',
    preventDuplicates: false,
    preventOpenDuplicates: false,
    target: 'body'
  })
})


.factory('ControleDeLogin', function ($location, $q) {
  return {
    request: function (config) {
      const login = localStorage.getItem('login')
      console.log(login)
      if (!login) {
        $location.path('/login')
      }
      return config
    },
    responseError: function (error) {
      return $q.reject(error)
    }
  }
})

.config(function ($routeProvider, $httpProvider) {

    // Adicionado para funcionar o POST
    //$httpProvider.defaults.headers.common = {};
    //$httpProvider.defaults.headers.post = {}
    //$httpProvider.defaults.headers.put = {};
    //$httpProvider.defaults.headers.patch = {};

    //$httpProvider.interceptors.push('ControleDeLogin')
    $routeProvider

    .when('/', {
      templateUrl: 'partials/busca.html',
      controller: 'BuscaController',
      controllerAs: 'vm'
    })

    .when('/cadastro', {
      templateUrl: 'partials/cadastro.html',
      controller: 'CadastroController',
      controllerAs: 'vm'
    })

    .when('/produto/:id', {
      templateUrl: 'partials/produto.html',
      controller: 'ProdutoController',
      controllerAs: 'vm'
    })

      // rota invalida
      .otherwise({
        redirectTo: '/produto/1234'
      })
    })