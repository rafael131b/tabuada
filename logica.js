function verificar(){
let num=document.getElementById('txtn')
let tab=document.getElementById('seltab')


if(num.value.length==0){
    alert('Verifique os dados e tente novamente!')
}else{

    let n=Number(num.value)
    let c=1
    tab.innerHTML=''
     while(c<=10){
         let item=document.createElement('option')
         item.text=`${c} x ${n}=${c*n}`
         tab.appendChild(item)
         c++
     }
}



}