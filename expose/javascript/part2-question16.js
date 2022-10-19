
let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 30,
    rareCars: 2,
};

for (let carType in statistics){
    //console.log(carType, statistics[carType]);
	if(carType[0] === 'r' || statistics[carType] % 2 === 1){
		console.log(statistics[carType]);
	}
	
}
