'use strict'

angular.module('AppVendas')

.controller('ProdutoController', ProdutoController)

function ProdutoController($http, $routeParams) {

	var vm = this


  vm.produto = {}

  vm.ListarProduto = function() {

    if ( $routeParams.id.length == 24) {
      $http({
        method: 'GET',
        url: 'http://192.168.25.194:3000/api/v1/produtos/find/' + $routeParams.id
      })
      .then(function(ret){
        vm.produto = ret.data
        $(document).ready(function(){
          $('.flexslider').flexslider({
           animation: 'slide',
           controlNav: 'thumbnails'
         })
        })
      })
    }
  }
}