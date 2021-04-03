let para = document.getElementById('para')
let btn = document.getElementById('btn')

let colors = {
    0 :'white',
    1:'green',
    2:'blue',
    3:'crimson',
    4:'yellow',
    5:'orange'
}
let cl = 0 ; 
btn.addEventListener('click',()=>{
    para.style.backgroundColor = colors[cl]
    cl++;

if(cl > 5){
    cl = 0; 
} 
})