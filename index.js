function satu() {
  console.log("satu");
}

function dua() {
  console.log("function dua akan dijalankan");
  setTimeout(() => {
    console.log("dua");
  }, 3000);
}

function tiga() {
  console.log("tiga");
}

satu();
dua();
tiga();
