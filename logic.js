const lorem = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, fugiat.","Ducimus doloribus doloremque, asperiores consequatur nemo voluptatibus praesentium mollitia nulla!","Enim veritatis, blanditiis saepe tenetur dolore voluptatum libero nihil magnam.","Repudiandae possimus necessitatibus, neque laudantium sapiente odit amet consequatur eos.","Ea libero perspiciatis quo eligendi minima veniam. Quidem, dolores at!","Dolorem itaque deleniti necessitatibus facilis officia autem beatae, eum cumque?","Minus id ea saepe officiis voluptatem ipsa? Esse, quasi error!","Aspernatur eaque explicabo at officia esse nostrum a quisquam aut?","Voluptates similique quas qui fuga nisi vero, debitis id saepe.","Molestias ut, odio ab incidunt consectetur error non distinctio atque?"];
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }
 function Clear(){
    var clr = document.getElementById('box');
    clr.innerHTML = '';
 }

 input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      //document.getElementById("mybtn").click();
      generate();
    }
  });

 async function generate(){
    const n = document.getElementById('num').value;
    console.log(n);
    const div = document.getElementById('box');
    div.innerHTML = "";
    for(var i = 0; i < n;i++){
        for(var j = 0; j <10;j++){
            var para = document.createElement('p');
            for(var k = 0; k < 10; k++){
                let x = Math.floor((Math.random() * 10) + 1);
                var text = document.createTextNode(lorem[x]);

                para.appendChild(text);
            }
            
        }
        await sleep(500);
        div.appendChild(para);
        
    }
}