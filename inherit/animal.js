class Animal
{
    constructor(name)
    {
        this.name = name;
    }
    showInfo()
    {
        console.log("name : "+this.name);
    }
    move()
    {
        console.log("animal can move");
    }

}
class Cat extends Animal
{
    constructor(name,age,height)
    {
        super(name)
        this.age = age;
        this.height= height;
    }
    showInfo(){
        console.log("name : "+this.name)
    }
    eat()
    {
        console.log("cat can eat");
    }
}
const cat =  new Cat("tom",23,23);
cat.showInfo();
cat.eat();