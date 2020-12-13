function fetchAll() {
    fetch('/proveAssignments/prove10/fetchAll').then(res => {
        if (res.ok){
          return res.json()
        }
        else {
            throw new Error(res.statusText)
        }
    }  
    ).then(data => {
       const list = document.getElementById('_avenger3')
       const array = data.avengers.map(item => `<li>${item.name}</li>` ).join('')
       list.innerHTML = array;
    }

    ).catch(error => {
        console.log(error);
    })
}
fetchAll();

function buttonClick()
{
    fetch('/proveAssignments/prove10/insert', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({_csrf:document.getElementById("_avenger5").value,name: document.getElementById("_avenger").value})
    })
    .then(res=> res.json())
    .then(data => {
        document.getElementById("_avenger2").innerText = '';
        for (let a of data.avengers)
        {
            document.getElementById("_avenger2").innerHTML += '<li> Name: ' + a.name;
        }
    } )
    .catch(console.error)
}