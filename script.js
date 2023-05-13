let string = "";
const buttons = document.querySelectorAll('.button');
let input = document.querySelector('input');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e)=>{
    console.log(e.target);
    if(e.target.innerHTML == '='){
      string = eval(string);
      input.value = string;
    }else if(e.target.innerHTML == 'AC'){
      string = "";
      input.value = string;
    }else if(e.target.innerHTML == 'CE'){
      string = input.value.toString().slice(0,-1);
      input.value = string;
    }
    else{
      string = string + e.target.innerHTML;
      input.value = string;
    }  
  })
})