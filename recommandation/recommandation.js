for (let e of document.getElementById("selector").children) {
    e.addEventListener("click", loadEvent)
}

async function animateChange(e) {
    let old = e.style.order;
    let computed = getComputedStyle(e);
    let dist = (3-old) * (e.clientWidth + parseFloat(computed.marginLeft) + parseFloat(computed.marginRight));
    let entry = $(".entry.selected");

    entry.removeClass("selected")
    e.classList.add("selected")
    console.log(dist)
    $(e).css("transition", "0.3s")
    $(e).css("transform", `translateX(${dist}px)`)
    entry.css("transition", "0.3s")
    entry.css("transform", `translateX(${-dist}px)`)
    await new Promise(resolve => setTimeout(resolve, 300));
    console.log("test")
    $(e).css("order", "3")
    $(e).css("transition", "0s")
    $(e).css("transform", "")
    entry.css("transition", "0s")
    entry.css("transform", "")
    e.style.order=3;
    entry.css("order",old)
    
}

// onClick parsing
function loadEvent(e) {
    if (!(e.target.classList.contains("entry"))) return
    if (e.target.classList.contains("selected")) return
    animateChange(e.target)
    loadPage(e.target)
};

// jQuery load wrapper
function loadPage(e) {
    let name = e.id;
    window.scrollTo(0, 0);
    $('#content').load(`./recommandation/${name}.html`);
}
loadPage(document.getElementById("drippin"))
