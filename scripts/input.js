const inputs = document.querySelectorAll('.input_wrapper');
const allL = document.querySelectorAll('.lal');
inputs.forEach(item=>{
    if (item.classList.contains('input_wrapper')){
            const input = item.querySelector('.lass');
            const label = item.querySelector('.lal');
            input.addEventListener('click', ()=>{
                allL.forEach(all=>{
                    const input = all.previousElementSibling;
                    if (input.value == ""){
                        all.classList.remove('focus');
                    }         
                });
                label.classList.add('focus');
            });      
    }
});