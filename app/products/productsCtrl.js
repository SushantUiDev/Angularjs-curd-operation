(function(){
	function productsCtrlFn($rootScope){
		var vm=this;
		vm.name="suhsant";
		vm.products = [
			{
				"Name": "samsung",
				"picture": "canon1.jpeg",
				"price": "1600",
				"description":"Canon is a Japanese manufacturer of high-end digital SLR cameras and other types of cameras, and was founded in 1937. He",
				"subTotal":"",
				"total":""
			},
			{
				"Name": "Nikon",
				"picture": "canon2.jpeg",
				"price": "1200",
				"description":"Nikon is a Japanese manufacturer of high-end digital SLR cameras and other types of cameras, and was founded in 1937. He",
				"subTotal":"",
				"total":""
			},
			{
				"Name": "Olympus",
				"picture": "canon3.jpeg",
				"price": "1100",
				"description":"Olympus is a Japanese manufacturer of high-end digital SLR cameras and other types of cameras, and was founded in 1937. He",
				"subTotal":"",
				"total":""
			},
			{
				"Name": "Leica",
				"picture": "canon4.jpeg",
				"price": "800",
				"description":"Leica is a Japanese manufacturer of high-end digital SLR cameras and other types of cameras, and was founded in 1937. He",
				"subTotal":"",
				"total":""
			},
			{
				"Name": "Pentax",
				"picture": "canon5.jpeg",
				"price": "500",
				"description":"Pentax is a Japanese manufacturer of high-end digital SLR cameras and other types of cameras, and was founded in 1937. He",
				"subTotal":"",
				"total":""
			},
			{
				"Name": "Minolta",
				"picture": "canon6.jpeg",
				"price": "1230",
				"description":"Minolta is a Japanese manufacturer of high-end digital SLR cameras and other types of cameras, and was founded in 1937. He",
				"subTotal":"",
				"total":""
			},
			{
				"Name": "Sony",
				"picture": "canon7.jpeg",
				"price": "1400",
				"description":"Sony is a Japanese manufacturer of high-end digital SLR cameras and other types of cameras, and was founded in 1937. He",
				"subTotal":"",
				"total":""
			},
			{
				"Name": "Fujifilm",
				"picture": "canon8.jpeg",
				"price": "1632",
				"description":"Fujifilm is a Japanese manufacturer of high-end digital SLR cameras and other types of cameras, and was founded in 1937. He",
				"subTotal":"",
				"total":""
			},
			{
				"Name": "kotak",
			    "picture": "canon9.jpeg",
				"price": "900",
				"description":"Kotak is a Japanese manufacturer of high-end digital SLR cameras and other types of cameras, and was founded in 1937. He",
				"subTotal":"",
				"total":""
			},
			{
				"Name": "canon",
				"picture": "sonycamera.jpeg",
				"price": "1456",
				"description":"Canon is a Japanese manufacturer of high-end digital SLR cameras and other types of cameras, and was founded in 1937. He",
				"subTotal":"",
				"total":""
			},
			{
				"Name": "nikon",
				"picture": "sonycamera1.jpeg",
				"price": "1800",
				"description":"Nikon is a Japanese manufacturer of high-end digital SLR cameras and other types of cameras, and was founded in 1937. He",
				"subTotal":"",
				"total":""
			},
			{
				"Name": "sony",
				"picture": "sonycamera2.jpeg",
				"price": "2000",
				"description":"Cansonyon is a Japanese manufacturer of high-end digital SLR cameras and other types of cameras, and was founded in 1937. He",
				"subTotal":"",
				"total":""
			}
		 ];
		vm.totValue=["1","2","3","4","5","6","7","8","9","10"];
		vm.minimumProducts=5;
		vm.showMore=function(){
			vm.minimumProducts+=5;
			
		}
		vm.calculate=function(no){
			alert("hi");
			console.log(no);
		}
		
		vm.addToCart=function(args){
			//console.log(args);
			// $rootScope.$broadcast("ITEM-ADDED", item);
            //send notification 
			$rootScope.$broadcast("ITEM-ADDED",args);
			
		}
		
		vm.sumTotal=function(){
			console.log("work..");
		}
		
		vm.deletUser=function(product){
			console.log(product);
			//vm.index=-1;
			 vm.index = -1;
					var comArr = eval(vm.products);
					for (var i = 0; i < comArr.length; i++) {
						if (comArr[i].name === product.firstName) {
							vm.index = i;
							console.log(vm.index);
							break;
						}
					}
					if (vm.index === -1) {
						console.log(vm.index);
						alert("Something gone wrong");
					}
					vm.products.splice(vm.index, 1);
			vm.message="you delet user successigully..";
		}
		
		
		
		
	}
	angular.module("products")
	.controller("productsCtrl",["$rootScope",productsCtrlFn]);
})();