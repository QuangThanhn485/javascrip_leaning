function show(some)
{
    console.log("total is : "+some)
}
function calculator(num1 , num2)
{
    const total = num1 + num2;
    return total;
}
show(calculator(5,8));

// call back function
function print(some)
{
    console.log("total using callback is : "+some)
}
function sum(num1 , num2 , callBack)
{
    const sum = num1 + num2;
    callBack(sum);
}
sum(2,5,print)