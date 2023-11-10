function solve (input){
    let phoneBook = {};
    for(let item of input){
        let [name, phone] = item.split(' ');
        phoneBook[name] = phone;
    }
    console.log(Object.entries(phoneBook));
}
solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);