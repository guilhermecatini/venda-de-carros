'use strict'

angular.module('AppVendas')

.controller('BuscaController', BuscaController)

function BuscaController($http) {
	var vm = this

	
	vm.prods = {}

	vm.ListarTodos = function() {
		$http({
			method: 'GET',
			url: 'http://192.168.25.194:3000/api/v1/produtos/find'
		})
		.then(function(ret){
			vm.prods = ret.data
		})
	}


}