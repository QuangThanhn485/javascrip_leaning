class Rectangle
{
    constructor (width =5 , height =10)
    {
        this.width = width;
        this.height = height;
    }
    getArea(){
        var area = this.width * this.height
        return area
    }
}
var rect = new Rectangle(3, 5);

console.log("Height "+ rect.height);
console.log("Width "+ rect.width);

// Gọi phương thức
let area = rect.getArea();
console.log("Area "+ area );
