'use strict'

angular.module('AppVendas')

.controller('ProdutoController', ProdutoController)

function ProdutoController($http, $routeParams) {

	var vm = this


  vm.produto = {}

  vm.ListarProduto = function() {
    $http({
      method: 'GET',
      url: 'http://172.16.2.28:3000/api/v1/produtos/find/' + $routeParams.id
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