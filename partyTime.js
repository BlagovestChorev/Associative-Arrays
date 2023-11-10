function partyList(input) {
    let guests = {
        regular: [],
        vip: []
    };

    let commandIndex = input.indexOf("PARTY");
    let reservations = input.slice(0, commandIndex);

    for (let reservation of reservations) {
        let isVip = /^\d/.test(reservation);
        if (isVip) {
            guests.vip.push(reservation);
        } else {
            guests.regular.push(reservation);
        }
    }

    let partyGuests = input.slice(commandIndex + 1);

    for (let guest of partyGuests) {
        let isVip = /^\d/.test(guest);
        if (isVip) {
            guests.vip = guests.vip.filter(vip => vip !== guest);
        } else {
            guests.regular = guests.regular.filter(regular => regular !== guest);
        }
    }

    let totalGuests = guests.vip.length + guests.regular.length;

    console.log(totalGuests);
    console.log(guests.vip.join('\n'));
    console.log(guests.regular.join('\n'));
}
partyList([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);

// partyList([
//     'm8rfQBvl', 
//     'fc1oZCE0', 
//     'UgffRkOn', 
//     '7ugX7bm0', 
//     '9CQBGUeJ', 
//     '2FQZT3uC', 
//     'dziNz78I', 
//     'mdSGyQCJ', 
//     'LjcVpmDL', 
//     'fPXNHpm1', 
//     'HTTbwRmM', 
//     'B5yTkMQi', 
//     '8N0FThqG', 
//     'xys2FYzn', 
//     'MDzcM9ZK', 
//     'PARTY', 
//     '2FQZT3uC', 
//     'dziNz78I', 
//     'mdSGyQCJ', 
//     'LjcVpmDL', 
//     'fPXNHpm1', 
//     'HTTbwRmM', 
//     'B5yTkMQi', 
//     '8N0FThqG', 
//     'm8rfQBvl', 
//     'fc1oZCE0', 
//     'UgffRkOn', 
//     '7ugX7bm0', 
//     '9CQBGUeJ'
// ]);