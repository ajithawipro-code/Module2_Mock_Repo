let arr1=[10,20,30];
let arr2=[40,50];
let combined=[...arr1,...arr2];
console.log(combined);

let person = { name: "Venu", age: 25 };
let extra = { city: "Bengaluru" };
let profile={...person,...extra};
console.log(profile);

function sumAll(...nums)
{
    let sum=0;
    for(let n of nums)
    {
        sum=sum+n;
    }
    console.log(sum);
}
sumAll(1,2,3,4);


let numbers = [10, 20, 30, 40, 50];
let [num1,num2,num3,num4,num5]=numbers;
console.log(num1);
let Numbers=[];
console.log(...numbers);

let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};

const{name:Name,address:{city:City,pin:Pin,geo:{lat:Lat,lng:Long}}}=user;

console.log(City);
console.log(Lat);
console.log(Long);


const multiply=(a,b)=>a*b;
console.log(multiply(3,4));

let emp = {
  name: "Prakash",
  details: {
    department: "IT",
    profile: { role: "Developer" }
  }
};

console.log(emp?.details?.profile?.role);


