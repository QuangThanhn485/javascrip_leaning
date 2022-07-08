class AbstractDocument{
    constructor(name)
    {
        this.name = name;
    }
    show()
    {
        throw "Subclass must implement abstract method";
    }
}
class PDF extends AbstractDocument
{
    show()
    {
        console.log("Show PDF document : "+this.name);
    }
}
class word extends AbstractDocument
{
    show()
    {
        console.log("Show word document : ",this.name);
    }
}
const doc1 = new PDF("java tutorial");
const doc2 = new word("python tutorial");
const doc3 =  new PDF("C# tutorial");

const Array= [doc1,doc2,doc3];
for(let i = 0; i < Array.length;i++)
{
    Array[i].show();
}
