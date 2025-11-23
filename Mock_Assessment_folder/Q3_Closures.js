function counter()
{
let count=0;
function inner()
{
   count++;
   console.log(count);
}
return {inner};
}

const c=counter();
c.inner();
c.inner();
c.inner();



function createWallet()
{
let total_amount=0
function addMoney(amount)
{
    total_amount=total_amount+amount;
    console.log(amount);
}

function checkBalance()
{
   console.log("Total Balance Now-->",total_amount);
}

return {addMoney,checkBalance};
}

let myWallet = createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
myWallet.checkBalance();  









