var star1 = document.getElementById('star1');
var star2 = document.getElementById('star2');
var star3 = document.getElementById('star3');
var star4 = document.getElementById('star4');
var star5 = document.getElementById('star5');
    
    
    star1.addEventListener("click",()=>{
        star1.style.color = "#bb7272";
        star2.style.color = "#bb7272";
        star3.style.color = "#bb7272";
        star4.style.color = "#bb7272";
        star5.style.color = "#bb7272";
        score1.checked = true;
    })
    star2.addEventListener("click",()=>{
        star1.style.color = "#ccc";
        star2.style.color = "#bb7272";
        star3.style.color = "#bb7272";
        star4.style.color = "#bb7272";
        star5.style.color = "#bb7272";
        score2.checked = true;
    })
    star3.addEventListener("click",()=>{
        star1.style.color = "#ccc";
        star2.style.color = "#ccc";
        star3.style.color = "#bb7272";
        star4.style.color = "#bb7272";
        star5.style.color = "#bb7272";
        score3.checked = true;

    })
    star4.addEventListener("click",()=>{
        star1.style.color = "#ccc";
        star2.style.color = "#ccc";
        star3.style.color = "#ccc";
        star4.style.color = "#bb7272";
        star5.style.color = "#bb7272";
        score4.checked = true;
    })
    star5.addEventListener("click",()=>{
        star1.style.color = "#ccc";
        star2.style.color = "#ccc";
        star3.style.color = "#ccc";
        star4.style.color = "#ccc";
        star5.style.color = "#bb7272";
        score5.checked = true;
    });