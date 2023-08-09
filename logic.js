const lorem = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, fugiat.","Ducimus doloribus doloremque, asperiores consequatur nemo voluptatibus praesentium mollitia nulla!","Enim veritatis, blanditiis saepe tenetur dolore voluptatum libero nihil magnam.","Repudiandae possimus necessitatibus, neque laudantium sapiente odit amet consequatur eos.","Ea libero perspiciatis quo eligendi minima veniam. Quidem, dolores at!","Dolorem itaque deleniti necessitatibus facilis officia autem beatae, eum cumque?","Minus id ea saepe officiis voluptatem ipsa? Esse, quasi error!","Aspernatur eaque explicabo at officia esse nostrum a quisquam aut?","Voluptates similique quas qui fuga nisi vero, debitis id saepe.","Molestias ut, odio ab incidunt consectetur error non distinctio atque?"];
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function Clear() {
    var head = document.getElementById('para').innerHTML = '';
    var clr = document.getElementById('box');
    clr.innerHTML = '';
}


const input = document.getElementById('num');
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        generate();
    }
});

async function generate() {
    const n = parseInt(document.getElementById('num').value);
    const div = document.getElementById('box');
    div.innerHTML = "";
    for (var i = 0; i < n; i++) {
        var head = document.getElementById('para');
        head.innerHTML = (i + 1) + " Paragraphs generated";
        var para = document.createElement('p');
        div.appendChild(para);

        for (var k = 0; k < 10; k++) {
            let x = Math.floor(Math.random() * lorem.length);
            for (var l = 0; l < lorem[x].length; l++) {
                var text = document.createTextNode(lorem[x][l]);
                para.appendChild(text);
                await sleep(1);
            }
        }
        para = document.createElement('p');
        div.appendChild(para);
    }
}