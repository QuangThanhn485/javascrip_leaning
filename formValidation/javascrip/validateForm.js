function validateForm(event)
{
    event.preventDefault();
    var u = document.getElementById("user").value;
    var p = document.getElementById("pass").value;
    var su = "thanh";
    var sp = "123456";
    if(u === su && p === sp)
    {
        alert("đăng nhập thành công");
        return true;
    }
    else
    alert("đăng nhập thất bại");
    return false;
}

const form = document.getElementById('form');

form.addEventListener('submit', validateForm)