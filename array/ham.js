// sử dụng lambda để tạo function một cách nhanh
var lambda =(value) => {return value = "i and you"}
console.log(lambda());
//genrator Function có khả năng tạm ngừng thực thi và có thể tiếp tục chạy ở một thời điểm nào đó
function*grt(){
    console.log("số 1");
    yield "";
    console.log("số 2");
    yield;
}
var i = grt(); // tạo ra biến i để 
let e= i.next().value
console.log(e)