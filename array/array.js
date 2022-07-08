// khởi tạo tạo ra 2 mảng
var myArray = [2,5,6,3,7,23,7,9];
var youArray=[3,6,4,8,4,9,7,45];
console.log("element at index 0 :"+myArray[0]); //in mảng myArray ra màng hình với index là 0 và 4
console.log("element at index 4 :"+myArray[4]);
var results = myArray.concat(youArray); // dùng hàm concat trộn 2 mảng ( myArray , youArray) lại với nhau
var count = myArray.length;
// dùng vòng lặp để in tất cả các phần tử chứa bênh trong mảng
for(var i = 0 ; i< myArray.length ; i++)
{
    console.log("count :"+ i +" >>> conten : " + myArray[i]);
}
var testArray =  function(value){
    return value> 7;
}
var testMap = function(value)
{
    if(value < 5 && value >3){
    return value = "thi lai"
    }
    if(value >= 5 && value < 7)
    {
        return value = "trung binh"
    }
    if(value >= 7 && value <8 ) {
        return value = "khá"
    }
    if(value >= 8)
    {
        return value ="giỏi"
    }
    if(value > 10){ return value = "không hợp lệ" }
    else {return value ="học lại"}
}
var getAll = myArray.every(testArray,myArray) // phương thức every() Phương thức này trả về true nếu mọi phần tử trong mảng này thỏa mãn một hàm kiểm tra (test) được cung cấp.
var get = myArray.some(testArray,myArray) //phương thức some() trả về true nếu ít nhất một phần từ thỏa mãng điều kiện test cung cấp
var showAll = myArray.filter(testArray,myArray) // phương thức filter() hiển thị ra các phần tử thỏa mãng điểu kiện truyền vào
var map = myArray.map(testMap,myArray)// phương thức map() tạo ra chuổi Array mới theo điều kiện thay đổi từng phần tử trong mảng Array cũ
var remute = myArray.pop(); // phương thức pop loại bỏ phần tử cuối cùng ra khỏi mảng và trả về chính phần tử đó
console.log("ok pot : "+remute)
console.log("ok all : " + getAll)
console.log("ok get : "+ get)
console.log("ok show : " + showAll)
console.log("ok map : " +map)
// vòng lặp xếp loại học sinh vào từng phần tử trong mảng myArray
for(var i = 0 ; i< myArray.length ; i++)
{
    if(myArray[i] > 10 )
    {
        console.log("kết quả không hợp lệ vì số điểm "+ myArray[i] + " đã vượt quá thang 10 ")
        continue;
    }
    console.log("được "+myArray[i]+ " điểm | xếp loại : "+ map[i])
}
console.log(results)