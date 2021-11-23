
let addBtnDOM = document.getElementById('liveToastBtn');
let ulDOM = document.getElementById('list');
const taskDOM = document.getElementById('task');


// Ekleme fonksiyonu

function newElement(){
    if(taskDOM.value){
        let liDOM = document.createElement('li');
        localStorage.setItem('liDOM', JSON.stringify(taskDOM.value));
        liDOM.value = localStorage.getItem('liDOM');
        ulDOM.append(liDOM);
        liDOM.innerHTML = taskDOM.value + `
        <button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>`;
        
        taskDOM.value = "";
        $(".success").toast("show");
    
        silmeFunc();
        
        
        liDOM.addEventListener('click', function(){
                    
            liDOM.classList.add('checked')
             
        })
        liDOM.addEventListener('dblclick', function(){
            liDOM.classList.remove('checked')
        })

    }  else {

        $(".error").toast("show");

    }
    
}

// silme fonk.

function silmeFunc(){
    let closeBtn = document.getElementsByClassName('close');
    for (let btn of closeBtn){
        btn.addEventListener('click', function(){
            $(this).parent().remove();
        });
    }
}








    









