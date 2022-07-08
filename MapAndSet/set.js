class Show
{
    constructor(set){
        this.set = set;
    }
    show(name)
    {
        console.log("------"+name+"-------");
        console.log("");
        for(let item of this.set){
            console.log(item);
        }
    }
}
const set =  new Set(["apple","banana","cherry"]);
let show = new Show(set);

show.show("");
set.add("mango");
show.show("later add mango");
set.delete("apple");
show.show("later delete apple");

const testEntries = set.entries();
const entries = new Show(testEntries);
// entries support create array has key and value from any object
entries.show("using entries");
function showFruit(set) {
    console.log("set: " + set);
}
// using forEach support scan and get values in sub propertied in Array or list
set.forEach(showFruit,set);
//key values
console.log("values : "+set.values().next().value);
console.log("done ? : "+set.values().next().done);