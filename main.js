let nama = document.getElementById("nama");
let des = document.getElementById("des");
let logout = document.querySelector(".logout");

logout.addEventListener("click", () => {
  window.location.href = "login.html";
});

window.addEventListener("load", () => {
  setTimeout(() => {
    nama.textContent = "H";
  }, 200);
  setTimeout(() => {
    nama.textContent = "Ha";
  }, 400);

  setTimeout(() => {
    nama.textContent = "Hal";
  }, 600);

  setTimeout(() => {
    nama.textContent = "Halo";
  }, 800);

  setTimeout(() => {
    nama.textContent = "Halo,";
  }, 1000);

  setTimeout(() => {
    nama.textContent = "Halo, ";
  }, 1200);

  setTimeout(() => {
    nama.textContent = "Halo, S";
  }, 1400);

  setTimeout(() => {
    nama.textContent = "Halo, Su";
  }, 1500);

  setTimeout(() => {
    nama.textContent = "Halo, Sur";
  }, 1700);

  setTimeout(() => {
    nama.textContent = "Halo, Sury";
  }, 1800);

  setTimeout(() => {
    nama.textContent = "Halo, Surya";
  }, 2000);

  setTimeout(() => {
    nama.textContent = "Halo, Suryad";
  }, 2200);

  setTimeout(() => {
    nama.textContent = "Halo, Suryadi";
  }, 2400);

  setTimeout(() => {
    nama.textContent = "Halo, Suryadi!";
  }, 2600);

  setTimeout(() => {
    nama.textContent = "Halo, Suryadi!👋";
    des.textContent = "Ini ringkasan keuanganmu hari ini.";
  }, 2800);
});

let bulan_data = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

let buttang = document.getElementById("tanggal");
let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

buttang.textContent = `${day} / ${bulan_data[month]} / ${year}`; //date + bulan_data[month] + year;
