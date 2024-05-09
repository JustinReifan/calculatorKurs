

// .then(res=>res.json())
// .then(res=>console.log(res))


const myResult = document.querySelector('#myResult');
const convertBtn = document.querySelector('#convertBtn');


convertBtn.addEventListener('click',function(){
  const inputAngka = document.querySelector('#inputAngka').value;
  console.log(inputAngka);
  
  if(inputAngka){
    const currentKurs = document.querySelector('#curKurs').value;
    const newKurs = document.querySelector('#newKurs').value;
    const url = 'https://api.api-ninjas.com/v1/convertcurrency?want='+newKurs+'&have='+currentKurs+'&amount='+inputAngka;
    fetch(url,{
      method: 'GET',
      headers: {
        'X-Api-Key': 'Q7dm36l7FggKUvvEDtutwkvgEcGnFKMQHeUpcdVg',
      },
    })
    .then(e=>e.json())
    .then(e=>{
      myResult.value = Math.round(e.new_amount);
      console.log(e);
    })

  }
})
