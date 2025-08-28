// copy the number
document.getElementById('Copy').addEventListener('click', function(event){
    event.preventDefault();
    const copyNumber = parseInt(document.getElementById('copy-number').innerText)
    const maincopynumber = copyNumber+1;
    document.getElementById('copy-number').innerText = maincopynumber;
})

// love button
document.getElementById('hart').addEventListener('click', function(event){
    event.preventDefault();
    const hartcount = parseInt(document.getElementById('hart-number').innerText)
    const hartCountnumber = hartcount+1;
    document.getElementById('hart-number').innerText = hartCountnumber;
})