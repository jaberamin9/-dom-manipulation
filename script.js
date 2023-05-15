
document.getElementById("button1").onclick = function () {
    let b = document.getElementById("b").value;
    let h = document.getElementById("h").value;
    let res = 0.5 * Number(b) * Number(h);

    let pa = document.createElement("li");
    let ch = document.createTextNode("Triangle   " + String(res));
    pa.appendChild(ch);

    document.getElementById("result").appendChild(pa);
}


document.getElementById("button2").onclick = function () {
    let b = document.getElementById("w").value;
    let h = document.getElementById("i").value;
    let res = Number(b) * Number(h);

    let pa = document.createElement("li");
    let ch = document.createTextNode("Rectangle   " + String(res));
    pa.appendChild(ch);

    document.getElementById("result").appendChild(pa);
}

document.getElementById("button3").onclick = function () {
    let b = document.getElementById("bb").value;
    let h = document.getElementById("hh").value;
    let res = Number(b) * Number(h);

    let pa = document.createElement("li");
    let ch = document.createTextNode("Parallelogram   " + String(res));
    pa.appendChild(ch);

    document.getElementById("result").appendChild(pa);
}

function changeBG() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("container").style.backgroundColor = "#" + randomColor;
}
function changeBG1() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("container1").style.backgroundColor = "#" + randomColor;
}
function changeBG2() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("container2").style.backgroundColor = "#" + randomColor;
}