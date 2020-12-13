
console.log("fetch prove11.js!!!")
const socket = io();

window.addEventListener("load",() => {
    fetch('/proveAssignments/prove11/fetchAll').then(res => res.json()).then(data => {
        //Do something with the response data
        for (let a of data.avengers)
        {
            document.getElementById("get").innerHTML += '<li> Hero: ' + a.name + ', Power: ' + a.power + '</li>';
        }
        //document.getElemebtById("get").innerHTML = JSON.stringify(data);
        console.log(data)
    })
    .catch(console.error)
});
socket.on('broadcast', data=> {
    document.getElementById("get").innerText = '';
    for (let a of data.avengers)
    {
        document.getElementById("get").innerHTML += '<li> Hero: ' + a.name + ', Power: ' + a.power + '</li>';
    }
})

function postRequest() {
    // POST Request 

    const newData = {
        newAvenger: document.getElementById("insert").value,
        newPower: document.getElementById("power").value,_csrf:document.getElementById("_avenger5").value
    } // Get this from input
    fetch('/proveAssignments/prove11/insert',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newData)
    }).then(res => res.json())
    .then(data => {
        document.getElementById("get").innerText = '';
        for (let a of data.avengers)
        {
            document.getElementById("get").innerHTML += '<li> Hero: ' + a.name + ', Power: ' + a.power + '</li>';
        }
        socket.emit("broadcast",data);
        document.getElementById("insert").value = '';
        document.getElementById("power").value = '';
        console.log(data)
    })
    .catch(console.error)
}