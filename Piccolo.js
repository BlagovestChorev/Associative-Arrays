function parkingLot(input) {
    let cars = new Set();

    for (let entry of input) {
        let [direction, carNumber] = entry.split(', ');

        if (direction == 'IN') {
            cars.add(carNumber);
        } else if (direction == 'OUT') {
            cars.delete(carNumber);
        }
    }

    let sortedCars = Array.from(cars).sort();

    if (sortedCars.length == 0) {
        console.log('Parking Lot is Empty');
    } else {
        console.log(sortedCars.join('\n'));
    }
}
parkingLot([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);