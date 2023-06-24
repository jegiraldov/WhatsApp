const URL_API = "http://localhost:3000"

//Obtengo los usuarios de la API
const getUsuarios = async() => {
    try {
        
        const {data} = await axios.get(`${URL_API}/usuarios`);
        return data;

    } catch (error) {
        console.log(error);
        return [];
    }
}

//Listando usuarios
document.addEventListener("DOMContentLoaded", async ()=> {
    const usuarios = await getUsuarios ();
    //console.log(usuarios)
})


var users = [];

async function getUsersAsync() {
  try {
    const data = await getUsuarios();
    users = data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

// Call the async function to fetch users
getUsersAsync();

async function validateForm(event) {
  event.preventDefault();

  const cel = document.getElementById('celular');
  const pass = document.getElementById('password');

  if (cel.value === '' || pass.value === '') {
    alert('Todos los campos son requeridos');
    return; // Stop further execution
  }

  // Wait until users array is filled before proceeding
  await getUsersAsync();

  for (var i = 0; i < users.length; i++) {
    if (users[i].numeroCelular === cel.value) {
      const user = users[i]

      if(user.password=== pass.value){
        window.location.href = "./home.html";
      }else{
        alert('contraseña invalida');
      }

      return; 
    }
  }

  alert('no existe');
}
