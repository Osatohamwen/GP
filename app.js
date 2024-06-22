const clickMe = document.getElementById('click-me');
const popUpWrap = document.getElementById('pop-up-wrap');
const amenBtn = document.getElementById('amen');
const bgText = document.getElementById('bg-text');
const program = document.querySelectorAll('li');




console.log(popUpWrap)

clickMe.addEventListener('click',(e) => {
    popUpWrap.classList.add('pop-up')
    bgText.style.display = "none";
});

amenBtn.addEventListener('click', (e) => {
    window.location.reload()
});

program.forEach((item) => {
   let open = false;
    item.addEventListener('click',(e) => {
        if(!open){
            item.style.textDecoration = "line-through black";
            open = true;
        }else{
            item.style.textDecoration = "none";
            open =false;
        }
        
    })
});
