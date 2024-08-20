function abrirHistorico() {
  console.log("Botão Histórico clicado");
}

function abrirTransferencia() {
  console.log("Botão Transferência clicado");
}

//-------

const apiUrl = 'https://api.example.com/me';
const token = localStorage.getItem('token');

fetch(apiUrl, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
.then(response => response.json())
.then(data => {
  const username = data.name;
  document.getElementById("username").textContent = username;
})
.catch(error => console.error(error));
//------------

