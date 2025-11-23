let nums = [10, 3, 7, 20, 13, 2];
let squared_array=nums.map((n)=>{return n*n});
console.log(squared_array);

let filtered_array=nums.filter((n)=>{
    if(n%2!=0)
    {
       return n;
    }
});
console.log(filtered_array);

let sum_of_all=nums.reduce((acc,el)=>{
      return acc+el;
},0);
console.log(sum_of_all);

let sorted_array=nums.sort((a,b)=>{ return b-a});
console.log(sorted_array);


function displayCar()
{
    console.log("I am inside displayCar");
}
function displayTruck()
{
    console.log("I am inside displayTruck");
}

function displayBike()
{
    console.log("I am inside displayBike");
}

function vehicleInfo(vehicleCategory,callbackFn)
{
    callbackFn();
    console.log("Got into HOF");
}

vehicleInfo("Car", displayCar);
vehicleInfo("Truck", displayTruck);
vehicleInfo("Bike", displayBike);





