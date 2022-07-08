const ten = "Nguyen Quang Thanh"
const ngayNhap = new Date();
function Title(i,count)
{
    if(i == 0)
    {console.log("........................ in "+count+" lần ......................")}
}
function in5lan()
{
    let i = 0;
    while(i<5)
    {
        Title(i,5);
        console.log("tên : "+ten);
        console.log("ngày nhập : "+ngayNhap)
        i++;
    }
}
function in2lan()
{
    let i = 0;
    while(i<2){
        Title(i,2);
        console.log("tên : "+ten);
        console.log("ngayNhap : "+ngayNhap);
        i++;
    }
}
export{ten,ngayNhap,Title,in5lan,in2lan};
