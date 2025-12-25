// ============= No 1 =============
const table = [
  { code: "A001", name: "Wati", parent: null },
  { code: "A002", name: "Wira", parent: "A001" },
  { code: "A003", name: "Andi", parent: "A002" },
  { code: "A004", name: "Bagus", parent: "A002" },
  { code: "A005", name: "Siti", parent: "A001" },
  { code: "A006", name: "Hasan", parent: "A005" },
  { code: "A007", name: "Abdul", parent: "A006" },
];

function getDescendants(input) {
    if (!table.some((item) => item.code === input)) {
        return "Kode Invalid";
    }

    let result = [];

    const children = table.filter((item) => item.parent === input);

    for (const child of children) {
        result.push(child.name);
        const descendantsOfChild = getDescendants(child.code);
        result = result.concat(descendantsOfChild)
    }

    return result;
}

console.log(getDescendants("A001"));
console.log(getDescendants("A002"));
console.log(getDescendants("A005"));





// ============= No 2 =============
function getFibonacciArray(input) {
    let fibonacci = [0, 1];
    for (let index = fibonacci.length; index < input; index++) {
        fibonacci.push(fibonacci.at(-1) + fibonacci.at(-2))
    }
    return fibonacci;
}

console.log(getFibonacciArray(5))
console.log(getFibonacciArray(10))




// ============= No 3 =============
function getSubstring(input) {
    const splitText = input.split("")
    let listSementara = [];
    let listResult = [];

    for (const char of splitText) {
        if (!listSementara.includes(char)) {
            listSementara.push(char)
        } else {
            if (listSementara.length > listResult.length) {
                listResult = listSementara
            }
            // listSementara = [char];
            const index = listSementara.indexOf(char);
            listSementara = listSementara.slice(index + 1);
            listSementara.push(char);

        }

        if (listSementara.length > listResult.length) {
            listResult = listSementara
        }
    }

    return [listResult.join(""), listResult.length];
}

const [result, length] = getSubstring("pwwkew")
console.log(length)
console.log(`Substring terpanjang adalah "${result}" dengan panjang ${length}`)




// ============= Integrasi HTML =============
function handleDescendants() {
    const kode = document.getElementById("kodeInput").value;
    const result = getDescendants(kode);

    document.getElementById("descendantsResult").innerText = Array.isArray(result) ? result.join(", ") : result;
}

function handleFibonacci() {
    const angka = Number(document.getElementById("fibInput").value);
    const result = getFibonacciArray(angka);

    document.getElementById("fibResult").innerText = result.join(", ");
}

function handleSubstring() {
    const text = document.getElementById("substringInput").value;
    const [result, length] = getSubstring(text);

    document.getElementById("substringResult").innerText = `Substring terpanjang adalah "${result}" dengan panjang ${length}`;
}