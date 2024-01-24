var elInp1 = document.querySelector('.inp1')
var elTitle = document.querySelector('.title')
var ranNum = Math.floor(Math.random() * 10 )
var count = 0
function fn() {
    count = count +1
    var val1 = elInp1.value
    if(count <= 3){
    if(ranNum > val1){
        elTitle.textContent = 'kampyuter oylagan raqam katta'
    }else if(ranNum < val1){
        elTitle.textContent = 'kampyuter oylagan raqam kichik'
    }else if(ranNum == val1){
        elTitle.textContent = 'Topdingiz'
    }
}else{
    elTitle.textContent = 'Yutqazdingiz >'+ranNum
}


}


// function fn(){
//     var val = elInp1.value
//     if(val % 2 == 0){
//         elTitle.textContent = val / 2
//     }else{
//         elTitle.textContent = val * 2
//     }
// }

        