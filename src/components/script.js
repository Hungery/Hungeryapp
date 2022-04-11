window.addEventListener('DOMContetLoaded', () => {
    fetch('http://localhost:8080/menus', {
        method: 'GET',
        hader:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
    }).then(res =>res.json()
    .then(data => {
        data.forEach(menu => {
            const div = document.createElement('div')
            div.classList.add('food')
            div.setAttribute('item-id', menu.menuid)
            div.innerHTML = `
                <h3>{menu.nimiravintola}</h3>
                <h4>${menu.nimi}</h4>
                <h4>${menu.tuotekategoria}</h4>
                <h4>${menu.kuvaus}</h4>
                <h4>${menu.hinta} €</h4>
                <button  Osta </button>
            `
        })
    }))
})