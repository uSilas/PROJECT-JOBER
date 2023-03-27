const password = document.getElementById('password');
const icon = document.getElementById('icon');

function showHide(){
    if(password.type === 'password'){
        password.setAttribute('type','text');
        icon.classList.add('hide')
    }
    else{
        password.setAttribute('type', 'password');
        icon.classList.remove('hide');
    }
}

const confirme = document.getElementById('confirme');
const icon2 = document.getElementById('icon2');
function showHide2(){
    if(confirme.type === 'password'){
        confirme.setAttribute('type','text');
        icon2.classList.add('hide2')
    }
    else{
        confirme.setAttribute('type', 'password');
        icon2.classList.remove('hide2');
    }
}