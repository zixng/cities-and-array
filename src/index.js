const cities = require('all-the-cities')
var searchPopulation = function(requiredPopulation){
    var citylist = []
    for (ii = 0; ii < cities.length; ii = ii + 1){
    var city = cities[ii]
    if(city.population === requiredPopulation){
        citylist.push(city)
    }
    }
    return citylist
}
console.log(searchPopulation(12344))

var searchInformation = function(requiredName){ 
    var citylist2 = []
    for (ii = 0; ii < cities.length; ii = ii + 1){
    var city = cities[ii]
    if(city.name.toUpperCase() === requiredName.toUpperCase()){
        citylist2.push(city)
    }
    }
    return citylist2
}
console.log(searchInformation("shanghai"))

//another way to solve the problem
//use find and fliter
const ciytDB = require('all-the-cities')
const getCityPopGreater = function(number){
    const largeCities = cityDN.filter(function(it){
        var keep = it.population > number
        return keep
    })
}//return array
var tenMillion = getCityPopGreater(10000000)
console.log(tenMillion)//return


const findCity = function(querycity){
    const qc = cityDB.find(function(it){
        var keep = it.name === querycity
        return keep
    })
    return qc
}
const pamplona = findCity(pamplona)
console.log(pamplona)

