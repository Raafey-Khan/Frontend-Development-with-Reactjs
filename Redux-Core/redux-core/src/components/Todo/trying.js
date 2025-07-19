

const obj = {
    name: 'Raafay',
    age: 20,
    city: {
        cityname: 'Mumbai'
    }
}

let a = JSON.parse(JSON.stringify(obj))
a.name = 'yusuf'
a.city.cityname = 'indore'
// also i will be changed in the main object

console.log(obj);
