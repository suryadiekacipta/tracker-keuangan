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

let pop1 = document.querySelector(".pop1");
let tambah_kategori = document.querySelector(".tambah-kategori");
let batal_pop1 = document.querySelector(".batal-1");
let tambah_pop1 = document.querySelector(".tambah-1");

tambah_kategori.addEventListener("click", () => {
  pop1.classList.add("pop1_active");
});

batal_pop1.addEventListener("click", () => {
  pop1.classList.remove("pop1_active");
});

// INI KATEGORI//

let parent1 = document.querySelector(".kategori-list");
let opsi_kat = document.querySelector(".opsi2");
let opsi_nominal = document.querySelector(".opsi3");
let but_tambah = document.querySelector(".tambah-1");

let data_logo = [
  "image/sendok.png",
  "image/bag.png",
  "image/koper.png",
  "image/fuel.png",
  "image/games.png",
];
let data_kategori = JSON.parse(localStorage.getItem("data_kategori")) || [];

but_tambah.addEventListener("click", () => {
  if (opsi_kat.value == "Makanan & Minuman") {
    parent1.innerHTML += `
    <div class="kat-child1">
      <div class="kat-child2">
        <img src="${data_logo[0]}" />
        <h1>${opsi_kat.value}</h1>
      </div>
      <h1>Rp ${opsi_nominal.value}</h1>
    </div>`;
  } else if (opsi_kat.value == "Pemasukan") {
    parent1.innerHTML += `
    <div class="kat-child1">
      <div class="kat-child2">
        <img src="${data_logo[2]}" />
        <h1>${opsi_kat.value}</h1>
      </div>
      <h1>Rp ${opsi_nominal.value}</h1>
    </div>`;
  } else if (opsi_kat.value == "Bensin") {
    parent1.innerHTML += `
    <div class="kat-child1">
      <div class="kat-child2">
        <img src="${data_logo[3]}" />
        <h1>${opsi_kat.value}</h1>
      </div>
      <h1>Rp ${opsi_nominal.value}</h1>
    </div>`;
  } else if (opsi_kat.value == "Top Up Game") {
    parent1.innerHTML += `
    <div class="kat-child1">
      <div class="kat-child2">
        <img src="${data_logo[4]}" />
        <h1>${opsi_kat.value}</h1>
      </div>
      <h1>Rp ${opsi_nominal.value}</h1>
    </div>`;
  } else if (opsi_kat.value == "Belanja Bulanan") {
    parent1.innerHTML += `
    <div class="kat-child1">
      <div class="kat-child2">
        <img src="${data_logo[1]}" />
        <h1>${opsi_kat.value}</h1>
      </div>
      <h1>Rp ${opsi_nominal.value}</h1>
    </div>`;
  }
});

let but1ak = document.getElementById("button1");
let but2ak = document.getElementById("button2");

but1ak.addEventListener("click", () => {
  but1ak.classList.add("but1aktive");
  but2ak.classList.remove("but2aktive");
});

but2ak.addEventListener("click", () => {
  but2ak.classList.add("but2aktive");
  but1ak.classList.remove("but1aktive");
});

let nominal_uang = document.getElementById("nominal");
let opsi1 = document.getElementById("opsi1");
let butmsk = document.getElementById("button1");
let butklr = document.getElementById("button2");
let add1 = document.getElementById("button3");
let dte = document.getElementById("date");
let div_isi = document.querySelector(".riwayat-transaksi1");
let wrna_nom;

// let data_logo = [
//   "image/sendok.png",
//   "image/bag.png",
//   "image/koper.png",
//   "image/fuel.png",
//   "image/games.png",
// ];

add1.addEventListener("click", () => {
  if (opsi1.value == "Gaji Bulanan") {
    div_isi.innerHTML += `<div class="riwayat-list">
       <div class="child-riw">
          <img src="${data_logo[2]}" id="koper-riw" />
          <h1>${opsi1.value}</h1>
       </div>
      <h4>${dte.value}</h4>
      <h2 id="minorplus">Rp${nominal_uang.value}</h2>
      <img src="image/ellipse.png" class="img2" />
      </div>`;
    wrna_nom = document.getElementById("minorplus");
    if (!but1ak.classList.contains("but1aktive")) {
      wrna_nom.style.color = "red";
    }
  } else if (opsi1.value == "Makan Siang") {
    div_isi.innerHTML += `<div class="riwayat-list">
       <div class="child-riw">
          <img src="${data_logo[0]}" id="koper-riw" />
          <h1>${opsi1.value}</h1>
       </div>
      <h4>${dte.value}</h4>
      <h2 id="minorplus">Rp${nominal_uang.value}</h2>
      <img src="image/ellipse.png" class="img2" />
      </div>`;
  } else if (opsi1.value == "Bensin") {
    div_isi.innerHTML += `<div class="riwayat-list">
       <div class="child-riw">
          <img src="${data_logo[3]}" id="koper-riw" />
          <h1>${opsi1.value}</h1>
       </div>
      <h4>${dte.value}</h4>
      <h2 id="minorplus">Rp${nominal_uang.value}</h2>
      <img src="image/ellipse.png" class="img2" />
      </div>`;
  } else if (opsi1.value == "Top Up Game") {
    div_isi.innerHTML += `<div class="riwayat-list">
       <div class="child-riw">
          <img src="${data_logo[4]}" id="koper-riw" />
          <h1>${opsi1.value}</h1>
       </div>
      <h4>${dte.value}</h4>
      <h2 id="minorplus">Rp${nominal_uang.value}</h2>
      <img src="image/ellipse.png" class="img2" />
      </div>`;
  } else if (opsi1.value == "Belanja Bulanan") {
    div_isi.innerHTML += `<div class="riwayat-list">
       <div class="child-riw">
          <img src="${data_logo[1]}" id="koper-riw" />
          <h1>${opsi1.value}</h1>
       </div>
      <h4>${dte.value}</h4>
      <h2 id="minorplus">Rp${nominal_uang.value}</h2>
      <img src="image/ellipse.png" class="img2" />
      </div>`;
  }
});
