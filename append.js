
button=document.getElementById('show')
all=document.getElementById('list-items')


let userinput=[]

function add(){

    input=document.getElementById('input').value;
    userinput.push(input)
   

    button.addEventListener('click',add) 
}