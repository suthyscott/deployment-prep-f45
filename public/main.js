const btn = document.querySelector('button')

const getCat = () => {
   axios.get('/api/cat')
      .then(res => alert(res.data))
}

btn.addEventListener('click', getCat)