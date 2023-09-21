const btn = document.querySelectorAll('.button')
const bodys = document.querySelector('body')

btn.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
console.log(e);
console.log(e.target);
if(e.target.id==='grey'){
  bodys.style.backgroundColor = e.target.id;
}
if(e.target.id==='Blue'){
    bodys.style.backgroundColor = e.target.id;
  }
  if(e.target.id==='Brown'){
    bodys.style.backgroundColor = e.target.id;
  }
  if(e.target.id==='Orange'){
    bodys.style.backgroundColor = e.target.id;
  }
  if(e.target.id==='Green'){
    bodys.style.backgroundColor = e.target.id;
  }
  if(e.target.id==='Yellow'){
    bodys.style.backgroundColor = e.target.id;
  }
  if(e.target.id==='Red'){
    bodys.style.backgroundColor = e.target.id;
  }
  if(e.target.id==='Pink'){
    bodys.style.backgroundColor = e.target.id;
  }
  if(e.target.id==='Aqua'){
    bodys.style.backgroundColor = e.target.id;
  }
  if(e.target.id==='tan'){
    bodys.style.backgroundColor = e.target.id;
  }
    })
})
