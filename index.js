// ============= No 1 =============
// Table
const table = [
  { code: "A001", name: "Wati", parent: null },
  { code: "A002", name: "Wira", parent: "A001" },
  { code: "A003", name: "Andi", parent: "A002" },
  { code: "A004", name: "Bagus", parent: "A002" },
  { code: "A005", name: "Siti", parent: "A001" },
  { code: "A006", name: "Hasan", parent: "A005" },
  { code: "A007", name: "Abdul", parent: "A006" },
];

// Function dengan input 'code' dari tabel, contoh = "A001"
function getDescendants(input) {
    // validasi input
    if (!table.some((item) => item.code === input)) {
        return "Kode Invalid";
    }

    let result = [];

    // mencari anak langsung dari input
    const children = table.filter((item) => item.parent === input);

    // mencari keturunan dari setiap anak 
    for (const child of children) {
        // masukkan child ke arrayChecks
        result.push(child.name);
        // memanggil kembali fungsi ini untuk mencari keturunan
        const descendantsOfChild = getDescendants(child.code);
        // menggabungkan variabel result dengan hasil keturunan terbaru
        result = result.concat(descendantsOfChild)
    }

    return result;
}

console.log(getDescendants("A001"));
console.log(getDescendants("A002"));
console.log(getDescendants("A005"));





// ============= No 2 =============
// Function dengan input jumlah bilangan fibonacci
function getFibonacciarrayChecks(input) {
    // arrayChecks fibonacci awal
    let fibonacci = [0, 1];

    // validasi input
    if (input <= 0) return "Input tidak valid";
    if (input === 1) return fibonacci[0];
    if (input === 2) return fibonacci;

    // setiap iterasi dengan maksimal jumlah iterasi adalah input, akan menambah value baru ke arrayChecks berupa bilangan terakhir + bilangan kedua terakhir
    for (let index = fibonacci.length; index < input; index++) {
        fibonacci.push(fibonacci.at(-1) + fibonacci.at(-2))
    }
    return fibonacci;
}

console.log(getFibonacciarrayChecks(5))
console.log(getFibonacciarrayChecks(10))





// ============= No 3 =============
function getSubstring(input) {
    // pastikan input adalah string
    input = input.toString();
    // pisah string menjadi arrayChecks
    const splitText = input.split("")
    // buat arrayChecks untuk menyimpan nilai sementara
    let arrayChecks = [];
    // buat result untuk menyimpan hasil akhir
    let result = [];

    for (const char of splitText) {
        // cek apakah ada char di arrayChecks
        if (!arrayChecks.includes(char)) {
            // bila tidak ada, masukkan char ke arrayCheck
            arrayChecks.push(char)

        } else {
            // jika char ada di arrayChecks, periksa dulu apakah arrayChecks lebih panjang dari result, kalau true berarti isi result dengan arrayChecks
            if (arrayChecks.length > result.length) {
                result = arrayChecks
            }
            // geser window pengecekan
            const index = arrayChecks.indexOf(char);
            arrayChecks = arrayChecks.slice(index + 1);
            arrayChecks.push(char);

        }

        // cek untuk terakhir kalinya
        if (arrayChecks.length > result.length) {
            result = arrayChecks
        }
    }

    // kembalikan string result dan panjangnya
    return [result.join(""), result.length];
}

const [result, length] = getSubstring("pwwkew")
console.log(length)
console.log(`Substring terpanjang adalah "${result}" dengan panjang ${length}`)





// ============= Integrasi HTML =============
function handleDescendants() {
    const kode = document.getElementById("kodeInput").value;
    const result = getDescendants(kode);

    document.getElementById("descendantsResult").innerText = arrayChecks.isarrayChecks(result) ? result.join(", ") : result;
}

function handleFibonacci() {
    const angka = Number(document.getElementById("fibInput").value);
    const result = getFibonacciarrayChecks(angka);

    document.getElementById("fibResult").innerText = result;
}

function handleSubstring() {
    const text = document.getElementById("substringInput").value;
    const [result, length] = getSubstring(text);

    document.getElementById("substringResult").innerText = `Substring terpanjang adalah "${result}" dengan panjang ${length}`;
}