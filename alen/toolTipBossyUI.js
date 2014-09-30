toolTip = angular.module('bossy.Tooltip', [])
	toolTip.run(function($templateCache) {
		$templateCache.put('jasmineTest.html', 'jasmineTest.html');
	})
	toolTip.directive('bossyTooltip', function($compile, $http /*$data,*/ /*$schema*/) {
		var _schema;
		var	_data;
		this._options = {
				showLabels: true,
				title: 'Directive Title',
				content: 'Directive content'
				};
				
				
		 function setData(data) {
            var result = $data.getData(data);
            if( angular.isFunction( result.then ) && angular.isFunction( result.catch ) && angular.isFunction( result.finally ) ) {
				console.log('if');
                return result;
            }
			else {
				console.log('else');
                _data = result;
            }  
        }

        function setSchema(schema) {
            _schema = $schema.getSchema(schema);
        }
			
		return {
			restrict: 'EA',
			replace: true,
			template: ' <div> Title: {{bossyTooltip._options.title}} Content: {{tips._options.content}} </div>' ,
			// templateUrl: 'bossytool.html',
			controller: function($scope) {
					this._options = {
					title: 'Controller Title',
					content: 'Controller Content'
				};
			},
			controllerAs: "tips"		
		};
	});

	
	