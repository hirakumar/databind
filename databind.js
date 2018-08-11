let data={
  name:'hIRA kUMAR mAHARJAN',
  country:'Nepal',
  age:23
}

function init(){
  let  bodyTxt=document.querySelector('body').innerHTML;
  let bindPatt = /{\{[A-Za-z]+\}\}/g;
  let str = bodyTxt.match(bindPatt);
  let i=0;
  while(i<str.length){
    bodyTxt=bodyTxt.replace(str[i],'<span type="text" data-name="'+str[i].slice(2,-2)+'" >'+data[str[i].slice(2,-2)]+'</span>');
    i++;
  }
  document.querySelector('body').innerHTML=bodyTxt;
}

function activateInputDataModal(){
  let allModaInput=document.querySelectorAll('*[data-modal]');
  let j=0;
  while(j<allModaInput.length){
    // PAssing value for DATA
    allModaInput[j].value=data[allModaInput[j].dataset.modal];
    // Activated Keyup Event Listener
    if(allModaInput.tagName="INPUT"){
      allModaInput[j].addEventListener('keyup',dataBind);
    }
    
    j++;
  }
}

function dataBind(e){
  // Update data
  data[e.target.dataset.modal]=e.target.value;
  let allEle=document.querySelectorAll("span[data-name='"+e.target.dataset.modal+"']");

  let i=0;
  while(i<allEle.length){
   allEle[i].innerHTML=data[e.target.dataset.modal];
   i++;
  }

}

init(data);
activateInputDataModal();
