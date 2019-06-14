
//Preloader 

window.addEventListener('load',()=>{
	document.querySelector('.preloader')
	.classList.add('hidePreloader')
})



const CreateBook = (()=>{
    const cars = [];

    class Car{
        constructor(make,country,image,special,price,tpe,trans,gas){
            this.make = make;
            this.country = country;
            this.image = image;
            this.special = special;
            this.price = price;
            this.tpe = tpe;
            this.trans = trans; 
            this.gas = gas;
        }
    }

    const inTo = (make,country,image = 'image/44.jpg',special=true,
    price=50000,tpe='sedan',trans='automatic',gas=50) =>{
        const car = new Car(make,country,image,special,price,tpe,trans,gas);

        cars.push(car);
    }
   const call = () => {
      inTo('Comilla','Banglabesh');
      inTo('Cumilla','Banglabesh','image/50.jpg');
      inTo('comilla','Banglabesh','image/6.jpg',false);
      inTo('comilla','Banglabesh','image/7.jpg',false,55000);
      inTo('Jessore','Banglabesh','image/46.jpg',true,55000,'kiut');
      inTo('comilla','Banglabesh','image/17.jpg',false);

      inTo('dhaka','Banglabesh','image/42.jpg',false);
      inTo('dhaka','Banglabesh','image/47.jpg',true);
      inTo('Kushtia','Banglabesh','image/49.jpg',true);
      inTo('dhaka','Banglabesh','image/19.jpg',false);
      inTo('dhaka','Banglabesh','image/26.jpg',false);
   }
   call();
   //console.log(cars);
    
   const specialCar = cars.filter((car)=>{
       return car.special === true
    })

   return{
       cars,
       specialCar
   }

})();


const DisplaySpecial = ((CreateBook) =>{
    const specialCar = CreateBook.specialCar;
    // console.log(specialCar);
    const info = document.querySelector('.freture-info');

    document.addEventListener('DOMContentLoaded',()=>{
        info.innerHTML = '';

        let data = '';
        specialCar.forEach((element)=>{
            data+= `<div class="freture-iteam my-3 d-flex p-2 align-items-baseline flex-wrap">
                    <span data-image = "${element.image}" class="freture-icon mr-3">
                        <i class="fas fa-motorcycle"></i>
                    </span>
                    <h5 class="font-weight-bold mx-1">
                        ${element.make}
                    </h5>
                    <h5 class="mx-1">
                        ${element.country}
                    </h5>
                </div>`
        })

        info.innerHTML = data;

    })

    info.addEventListener('click',(event)=>{
        if(event.target.parentElement.classList.contains('freture-icon')){
            const image = event.target.parentElement.dataset.image;
            document.querySelector('.freture-photo').src = image;
        }
    })
    
})(CreateBook);



const allBook= ((CreateBook)=>{
	const cars = CreateBook.cars;
	//console.log(cars);
	const inventory = document.querySelector('.inventory-container');
	// console.log(inventory)

	document.addEventListener('DOMContentLoaded',()=>{
		inventory.innerHTML = '';

		let out = '';

		cars.forEach((car)=>{
			out += `<div class="col-10 mx-auto my-3 col-md-6 col-lg-4 single-obj ${car.make}">
						<div class="card car-card">
						  <img src="${car.image}" class="card-img-top car-img" alt="card-load">
						  <div class="card-body">
						    <div class="info d-flex justify-content-between">
						    	<div class="almas-text text-uppercase">
						    		<h6 class="font-width-bold">${car.make}</h6>
						    		<h6>${car.price}</h6>
						    	</div>
						    	<h5 class="car-value align-self-center py-2 px-3">
						    		<span class="book-price">120/=</span>
						    	</h5>
						    </div>
						  </div>
						  <div class="card-footer text-capitalize d-flex justify-content-between">
						  	<p><span><i class="fas fa-coffee"></i></span>${car.tpe}</p>
						  	<p><span><i class="fas fa-cogs"></i></span>${car.trans}</p>
						  	<p><span><i class="fas fa-gas-pump"></i></span>${car.gas}</p>
						  </div>
						</div>
					</div>`
		})

		inventory.innerHTML =  out;
	})
})(CreateBook)



const filterObject = (()=>{
	const filter = document.querySelectorAll('.filter-btn');
	// console.log(filter);

	filter.forEach((obj)=>{
		obj.addEventListener('click',(event)=>{
			const value = event.target.dataset.filter;
			//console.log(value);
			const singleCar = document.querySelectorAll('.single-obj');
			//console.log(singleCar);

			singleCar.forEach((obj)=>{
				if(value ==='all'){
					obj.style.display = 'block';	
				}
				else{
					(!obj.classList.contains(value))? obj.style.display = 'none' :
					 obj.style.display = 'block';
				}
			})
		})
	})
})();