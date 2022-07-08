const date  = new Date();
switch(date.getDay())
{
    case 0: {
        d="chủ nhật"
        break;
    }
    case 1: {
        d="thứ hai"
        break;
    }    
    case 2: {
        d="thứ ba"
        break;
    }    
    case 3: {
        d="thứ tư"
        break;
    }    
    case 4: {
        d="thứ năm"
        break;
    }    
    case 5: {
        d="thứ sáu"
        break;
    }    
    case 6: {
        d="thứ bảy"
        break;
    }
}
const day = date.getDate();
const year = date.getFullYear();
const month = date.getMonth();
const h = date.getHours();
const p = date.getMinutes();
const s = date.getSeconds();
console.log("( "+d+" ) "+day +"/"+month+"/"+year+"  "+h+":"+p+":"+s);