var cards=document.querySelectorAll(".card__content"),cardContainer=document.querySelector(".card"),currentCardIndex=0;cardContainer.addEventListener("wheel",(function(r){r.preventDefault(),currentCardIndex-=Math.sign(r.deltaY),currentCardIndex=Math.max(0,Math.min(currentCardIndex,cards.length-1));var e=cards[0].clientWidth+50,n=-currentCardIndex*e;cards.forEach((function(r,e){r.style.transform="translateX(".concat(n,"px)")}))}));
//# sourceMappingURL=index.be0d335b.js.map
