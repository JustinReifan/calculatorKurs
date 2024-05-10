const convertBtn = document.querySelector('#convertBtn');
convertBtn.addEventListener('click',async function(){
  
    try{
      const inputAngka = document.querySelector('#inputAngka').value;
      const currentKurs = document.querySelector('#curKurs').value;
      const newKurs = document.querySelector('#newKurs').value;
      const data = await getData(currentKurs,newKurs,inputAngka);
      updateUI(data);
    }
    catch(e){
      updateUI(e);
    }
})

function getData(curData,newData,inputAngka){
  
    const url = 'https://api.api-ninjas.com/v1/convertcurrency?want='+curData+'&have='+newData+'&amount='+inputAngka;
    return fetch(url,{
      method: 'GET',
      headers: {
        'X-Api-Key': 'Q7dm36l7FggKUvvEDtutwkvgEcGnFKMQHeUpcdVg',
      },
    })
    .then(e=>{
      if(!inputAngka){
        throw "Input angka terlebih dahulu!"
      }
      if(curData == 'Kurs' || newData == 'Kurs'){
        throw "Pilih kurs terlebih dahulu!"
      }
      if(!e.ok){
        throw "API KEY salah!";
      }
      return e.json();
    })
    .then(e=>{
      return Math.round(e.new_amount);
    })
    
}


function updateUI(resultText){
  const myResult = document.querySelector('#myResult');
  myResult.value = resultText;
}