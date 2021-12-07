const form = document.querySelector('form');
const nome = document.querySelector('#name');
const cost = document.querySelector('#cost');
const error = document.querySelector('#error');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if(nome.value && cost.value) {

    const item = {
      name: nome.value,
      cost: parseInt(cost.value)
    }

    db.collection('despesas').add(item).then(res => {
      error.textContent = '';
      nome.value = '';
      cost.value = '';

      // console.log(res)
    })

  } else {
    error.textContent =  'Por favor, insira os dados'
  }

})