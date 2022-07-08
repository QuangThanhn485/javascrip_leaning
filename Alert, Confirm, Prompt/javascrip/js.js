function showAlert()
{
    alert("bạn đã nhấn vào đây")
}
function textConfirmdialog()
{
    var result = confirm("lựa chọn")
    if (result)
            alert("ok see you again");
        else
            alert("goodbye");
}
function pormptDialogBox()
{
    var result = prompt("how age you ?","nhập tuổi")
    if(result != null)
    {
        alert("your age is :"+ result)
    }
}