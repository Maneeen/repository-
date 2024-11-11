function verify() {
    let a = parseInt(document.getElementById("a").innerText);
    let b = parseInt(document.getElementById("b").innerText);
    let c = parseInt(document.getElementById("c").innerText);

    let low, high;
    if (a < b) {
        low = a;
        high = b;
    } else {
        low = b;
        high = a;
    }

    let result;
    if (c >= low && c <= high) {
        result = "C принадлежит заданному диапазону";
    } else {
        result = "C не принадлежит заданному диапазону";
    }
    document.getElementById("result").innerText = result;
}

document.getElementById("verify").addEventListener('click', verify);
