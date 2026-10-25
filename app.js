/* ============================================================
   Stok Alat Jahit — Ramah Orang Tua
   Penyimpanan: LocalStorage (tanpa login, tanpa internet
   kecuali saat pertama memuat Tailwind CSS).
   Ikon: SVG garis (stock icon), tanpa emoji.
   Nomor warna benang: penomoran asli merek Extra.
   ============================================================ */

"use strict";

var LS_KEY = "stokAlatJahit_v1";

/* ---------- IKON SVG (STOCK ICON, TANPA EMOJI) ---------- */
var ICONS = {
  box: '<path d="M16.5 9.4 7.55 4.24"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',
  spool: '<path d="M7 3.5h10"/><path d="M7 20.5h10"/><rect x="9" y="3.5" width="6" height="17" rx="1"/><path d="M15 11h3.5a2 2 0 0 1 2 2v2"/>',
  needle: '<path d="M4 20 14.5 9.5"/><circle cx="17" cy="7" r="2.3"/><path d="M18.7 5.3c.8-2.3 2.8-2.6 3.8-1.3"/>',
  button: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4"/><circle cx="10.4" cy="10.4" r="1" fill="currentColor" stroke="none"/><circle cx="13.6" cy="10.4" r="1" fill="currentColor" stroke="none"/><circle cx="10.4" cy="13.6" r="1" fill="currentColor" stroke="none"/><circle cx="13.6" cy="13.6" r="1" fill="currentColor" stroke="none"/>',
  zipper: '<rect x="9" y="2.5" width="6" height="4" rx="1.5"/><circle cx="12" cy="9" r="1.4"/><path d="M12 10.4V14"/><path d="M9.5 14v6.5M14.5 14v6.5"/><path d="M9.5 16.5h5M9.5 19h5"/>',
  ruler: '<path d="M3.6 16.4 16.4 3.6l4 4L7.6 20.4l-4-4z"/><path d="m8.2 14.2 1.6 1.6M11.2 11.2l1.6 1.6M14.2 8.2l1.6 1.6"/>',
  layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 12 12 17 22 12"/><polyline points="2 17 12 22 22 17"/>',
  scissors: '<circle cx="6" cy="6" r="2.8"/><circle cx="6" cy="18" r="2.8"/><path d="M8.3 8.3 20 20M8.3 15.7 20 4"/>',
  cart: '<circle cx="9" cy="20.5" r="1.6"/><circle cx="18" cy="20.5" r="1.6"/><path d="M1.5 2.5h3l2.6 12.5a2 2 0 0 0 2 1.5h8.7a2 2 0 0 0 2-1.6L22.5 6.5H5.3"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  hash: '<line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  edit: '<path d="M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>',
  trash: '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  warn: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  back: '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
  x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  check: '<polyline points="20 6 9 17 4 12"/>',
  drop: '<path d="M12 2.7s6.5 7 6.5 11.3a6.5 6.5 0 0 1-13 0C5.5 9.7 12 2.7 12 2.7z"/>',
  refresh: '<polyline points="1 4 1 10 7 10"/><path d="M3.5 15a9 9 0 1 0 .5-5L1 10"/>',
  save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>'
};
function ikon(nama, kelas) {
  return '<svg class="' + (kelas || "w-6 h-6") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    (ICONS[nama] || "") + "</svg>";
}
/* Isi semua <span data-ikon="..."> di HTML statis */
function gambarIkonStatis() {
  var semua = document.querySelectorAll("[data-ikon]");
  for (var i = 0; i < semua.length; i++) {
    var el = semua[i];
    el.innerHTML = ikon(el.getAttribute("data-ikon"), el.getAttribute("data-kelas") || "w-6 h-6");
  }
}

/* ---------- KATEGORI ----------
   manualKode = true  -> kode diisi sendiri (Benang & Kain)
   adaWarna   = true  -> tampilkan lingkaran warna (Benang) */
var CATS = [
  { id: "B",  nama: "Benang",       icon: "spool",    prefix: "B",  manualKode: true,  adaWarna: true,
    labelKode: "Kode Warna / Nomor Pabrik", contohKode: "Contoh: Merah No. 46, Pink No. 456" },
  { id: "J",  nama: "Jarum",        icon: "needle",   prefix: "J",  manualKode: false, adaWarna: false },
  { id: "K",  nama: "Kancing",      icon: "button",   prefix: "K",  manualKode: false, adaWarna: false },
  { id: "R",  nama: "Resleting",    icon: "zipper",   prefix: "R",  manualKode: false, adaWarna: false },
  { id: "P",  nama: "Pita & Karet", icon: "ruler",    prefix: "P",  manualKode: false, adaWarna: false },
  { id: "KN", nama: "Kain",         icon: "layers",   prefix: "KN", manualKode: true,  adaWarna: false,
    labelKode: "Kode Kain (tulis manual)", contohKode: "Contoh: Katun Putih, Kotak Biru A3" },
  { id: "A",  nama: "Alat Lainnya", icon: "scissors", prefix: "A",  manualKode: false, adaWarna: false }
];

/* Nomor warna ASLI Benang Extra (dari label toko).
   no = "" artinya belum terverifikasi -> tulis "cek label". */
var WARNA_EXTRA = [
  { n: "Hitam",   h: "#111111", no: "" },
  { n: "Putih",   h: "#FFFFFF", no: "" },
  { n: "Merah",   h: "#DC2626", no: "46" },
  { n: "Marun",   h: "#7F1D1D", no: "" },
  { n: "Pink",    h: "#EC4899", no: "456" },
  { n: "Oranye",  h: "#F97316", no: "" },
  { n: "Kuning",  h: "#FACC15", no: "" },
  { n: "Hijau",   h: "#16A34A", no: "838" },
  { n: "Hijau Tua", h: "#166534", no: "17" },
  { n: "Biru",    h: "#2563EB", no: "109" },
  { n: "Dongker", h: "#1E3A8A", no: "" },
  { n: "Ungu",    h: "#7C3AED", no: "" },
  { n: "Coklat",  h: "#92400E", no: "172" },
  { n: "Abu-abu", h: "#9CA3AF", no: "073" },
  { n: "Krem",    h: "#F5E6C8", no: "" }
];

var SATUAN = ["Pcs", "Roll", "Meter", "Lusin", "Pack"];

/* ---------- DATA CONTOH (8 barang, tampil saat pertama dibuka) ---------- */
function dataContoh() {
  var t = Date.now();
  return [
    { id: "c1", cat: "B",  nama: "Benang Jahit Extra", kode: "Merah No. 46", warna: "#DC2626", satuan: "Roll",  stok: 12, min: 3, dibuat: t + 1 },
    { id: "c2", cat: "B",  nama: "Benang Jahit Extra", kode: "Pink No. 456",  warna: "#EC4899", satuan: "Roll",  stok: 1,  min: 3, dibuat: t + 2 },
    { id: "c3", cat: "J",  nama: "Jarum Mesin No. 14", kode: "J-01",      warna: null,      satuan: "Pcs",   stok: 8,  min: 2, dibuat: t + 3 },
    { id: "c4", cat: "K",  nama: "Kancing Kemeja Putih", kode: "K-01",    warna: null,      satuan: "Lusin", stok: 0,  min: 2, dibuat: t + 4 },
    { id: "c5", cat: "R",  nama: "Resleting Jepang 25 cm", kode: "R-01",  warna: null,      satuan: "Pcs",   stok: 6,  min: 2, dibuat: t + 5 },
    { id: "c6", cat: "P",  nama: "Pita Satin 2 cm Merah", kode: "P-01",   warna: null,      satuan: "Meter", stok: 15, min: 5, dibuat: t + 6 },
    { id: "c7", cat: "A",  nama: "Kapur Jahit Segitiga", kode: "A-01",    warna: null,      satuan: "Pcs",   stok: 3,  min: 1, dibuat: t + 7 },
    { id: "c8", cat: "KN", nama: "Kain Katun Polos", kode: "Putih Lebar 150", warna: null,  satuan: "Meter", stok: 8,  min: 2, dibuat: t + 8 }
  ];
}

/* ---------- STATE ---------- */
var items = [];
var state = { cat: "ALL", cari: "", digit: "" }; // cat: ALL | BELANJA | id kategori
var editingId = null;
var formCat = "B", formWarna = "#DC2626", formSatuan = "Pcs", formStok = 0, formMin = 2;
var aksiHapus = null;

/* ---------- BANTUAN ---------- */
function $(id) { return document.getElementById(id); }
function catById(id) {
  for (var i = 0; i < CATS.length; i++) if (CATS[i].id === id) return CATS[i];
  return CATS[0];
}
function uid() { return "x" + Date.now().toString(36) + Math.floor(Math.random() * 9999); }
function hanyaDigit(s) { return String(s == null ? "" : s).replace(/[^0-9]/g, ""); }

/* Kode otomatis: prefix + nomor terbesar + 1, mis. J-01, J-02, ... J-100 */
function kodeOtomatis(catId) {
  var prefix = catById(catId).prefix;
  var maks = 0;
  items.forEach(function (it) {
    if (it.cat !== catId) return;
    var m = String(it.kode).match(/(\d+)\s*$/);
    if (m) maks = Math.max(maks, parseInt(m[1], 10));
  });
  var no = maks + 1;
  var angka = no < 10 ? "0" + no : String(no);
  return prefix + "-" + angka;
}

function statusStok(it) {
  if (it.stok <= 0) return "habis";
  if (it.stok <= it.min) return "menipis";
  return "aman";
}
function perluBeli() { return items.filter(function (it) { return statusStok(it) !== "aman"; }); }

/* ---------- SIMPAN / MUAT ---------- */
function simpan() {
  try { localStorage.setItem(LS_KEY, JSON.stringify(items)); } catch (e) { /* memori penuh, abaikan */ }
}
function muat() {
  var mentah = null;
  try { mentah = localStorage.getItem(LS_KEY); } catch (e) { mentah = null; }
  if (mentah === null) {           // pertama kali dibuka -> isi contoh
    items = dataContoh();
    simpan();
  } else {
    try {
      var d = JSON.parse(mentah);
      items = Array.isArray(d) ? d : [];
    } catch (e) { items = []; }
  }
}

/* ---------- PESAN SINGKAT ---------- */
var timerToast = null;
function toast(pesan) {
  var el = $("toast");
  el.textContent = pesan;
  el.classList.remove("hidden");
  if (timerToast) clearTimeout(timerToast);
  timerToast = setTimeout(function () { el.classList.add("hidden"); }, 2200);
}

/* ---------- FILTER ---------- */
function cocokFilter(it) {
  if (state.cat === "BELANJA") {
    if (statusStok(it) === "aman") return false;
  } else if (state.cat !== "ALL") {
    if (it.cat !== state.cat) return false;
  }
  if (state.cari) {
    var kunci = (it.nama + " " + it.kode).toLowerCase();
    if (kunci.indexOf(state.cari.toLowerCase()) < 0) return false;
  }
  if (state.digit) {
    var d = hanyaDigit(it.kode);
    if (d.indexOf(state.digit) < 0) return false;
  }
  return true;
}

/* ---------- TAMPILAN: TAB KATEGORI ---------- */
function renderTab() {
  var box = $("tabKategori");
  var html = "";
  html += tombolTab("ALL", "box", "Semua", state.cat === "ALL");
  CATS.forEach(function (c) {
    html += tombolTab(c.id, c.icon, c.nama, state.cat === c.id);
  });
  box.innerHTML = html;
  var semua = box.querySelectorAll("[data-tab]");
  for (var i = 0; i < semua.length; i++) {
    semua[i].addEventListener("click", function () {
      state.cat = this.getAttribute("data-tab");
      render();
    });
  }
}
function tombolTab(id, icon, nama, aktif) {
  var cls = aktif
    ? "bg-blue-700 text-white border-blue-700"
    : "bg-white text-slate-900 border-slate-300";
  return '<button data-tab="' + id + '" class="shrink-0 ' + cls + ' border-4 font-black rounded-2xl px-5 py-3 min-w-[118px] min-h-[76px] shadow">' +
    '<span class="flex justify-center">' + ikon(icon, "w-9 h-9") + "</span>" +
    '<span class="block text-lg md:text-xl mt-1">' + nama + "</span></button>";
}

/* ---------- TAMPILAN: KEYPAD ANGKA ---------- */
function renderKeypad() {
  var box = $("keypad");
  var angka = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var html = "";
  angka.forEach(function (a) {
    html += '<button data-angka="' + a + '" class="bg-slate-800 hover:bg-slate-900 text-white font-black text-3xl rounded-2xl py-3 min-h-[68px]">' + a + "</button>";
  });
  box.innerHTML = html;
  var semua = box.querySelectorAll("[data-angka]");
  for (var i = 0; i < semua.length; i++) {
    semua[i].addEventListener("click", function () {
      if (state.digit.length < 6) state.digit += this.getAttribute("data-angka");
      render();
    });
  }
  $("labelDigit").textContent = state.digit === "" ? "—" : state.digit;
}

/* ---------- TAMPILAN: KARTU BARANG ---------- */
function kartuHTML(it) {
  var c = catById(it.cat);
  var st = statusStok(it);
  var bingkai = "border-slate-300 bg-white";
  var lencana = "";
  if (st === "menipis") {
    bingkai = "border-amber-400 bg-amber-50";
    lencana = '<span class="inline-flex items-center gap-2 bg-amber-400 text-slate-900 font-black text-xl rounded-xl px-3 py-1 mt-2">' + ikon("warn", "w-6 h-6") + "STOK MENIPIS</span>";
  } else if (st === "habis") {
    bingkai = "border-red-500 bg-red-50";
    lencana = '<span class="inline-flex items-center gap-2 bg-red-600 text-white font-black text-xl rounded-xl px-3 py-1 mt-2 animate-pulse">' + ikon("warn", "w-6 h-6") + "STOK HABIS</span>";
  }
  var lingkaran = "";
  if (c.adaWarna && it.warna) {
    lingkaran = '<span title="Warna benang" class="inline-block w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-slate-800 align-middle ml-2" style="background:' + it.warna + '"></span>';
  }
  return '' +
  '<article class="border-4 ' + bingkai + ' rounded-3xl p-4 shadow">' +
    '<div class="flex items-start justify-between gap-2">' +
      '<span class="bg-yellow-300 border-2 border-yellow-500 text-slate-900 font-black text-3xl md:text-4xl rounded-2xl px-3 py-1 break-words leading-tight">' + escapeHTML(it.kode) + "</span>" +
      '<span class="shrink-0 bg-slate-800 text-white text-lg font-bold rounded-xl px-3 py-1 inline-flex items-center gap-1">' + ikon(c.icon, "w-6 h-6") + " " + c.nama + "</span>" +
    "</div>" +
    '<h3 class="text-2xl md:text-3xl font-black mt-2 leading-snug">' + escapeHTML(it.nama) + lingkaran + "</h3>" +
    lencana +
    '<div class="grid grid-cols-3 gap-2 items-stretch mt-3">' +
      '<button data-aksi="kurang" data-id="' + it.id + '" class="bg-red-500 hover:bg-red-600 text-white font-black rounded-2xl py-4 min-h-[92px]"><span class="block text-4xl leading-none">−1</span><span class="block text-lg">Pakai</span></button>' +
      '<div class="bg-slate-100 border-4 border-slate-300 rounded-2xl flex flex-col items-center justify-center py-2">' +
        '<span class="text-5xl md:text-6xl font-black leading-none">' + it.stok + "</span>" +
        '<span class="text-xl font-bold text-slate-600">' + escapeHTML(it.satuan) + "</span>" +
      "</div>" +
      '<button data-aksi="tambah" data-id="' + it.id + '" class="bg-green-600 hover:bg-green-700 text-white font-black rounded-2xl py-4 min-h-[92px]"><span class="block text-4xl leading-none">+1</span><span class="block text-lg">Tambah</span></button>' +
    "</div>" +
    '<div class="grid grid-cols-4 gap-2 mt-2">' +
      '<button data-aksi="tambah5" data-id="' + it.id + '" class="bg-blue-600 hover:bg-blue-700 text-white font-black text-2xl rounded-2xl py-3">+5</button>' +
      '<button data-aksi="tambah10" data-id="' + it.id + '" class="bg-blue-600 hover:bg-blue-700 text-white font-black text-2xl rounded-2xl py-3">+10</button>' +
      '<button data-aksi="ubah" data-id="' + it.id + '" class="bg-amber-400 hover:bg-amber-500 text-slate-900 font-black text-xl rounded-2xl py-3">Ubah</button>' +
      '<button data-aksi="hapus" data-id="' + it.id + '" class="bg-slate-200 hover:bg-slate-300 text-slate-900 font-black text-xl rounded-2xl py-3">Hapus</button>' +
    "</div>" +
    '<p class="text-lg text-slate-600 mt-2">Batas minimum: <b>' + it.min + " " + escapeHTML(it.satuan) + "</b></p>" +
  "</article>";
}
function escapeHTML(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/* ---------- TAMPILAN UTAMA ---------- */
function render() {
  renderTab();
  $("labelDigit").textContent = state.digit === "" ? "—" : state.digit;

  var tampil = items.filter(cocokFilter);
  // yang habis / menipis tampil paling atas
  tampil.sort(function (a, b) {
    var bobot = { habis: 0, menipis: 1, aman: 2 };
    var s = bobot[statusStok(a)] - bobot[statusStok(b)];
    if (s !== 0) return s;
    return (a.dibuat || 0) - (b.dibuat || 0);
  });

  var box = $("daftarBarang");
  var html = "";
  tampil.forEach(function (it) { html += kartuHTML(it); });
  box.innerHTML = html;
  $("kosong").classList.toggle("hidden", tampil.length > 0);

  var namaTampilan = state.cat === "ALL" ? "semua barang"
    : state.cat === "BELANJA" ? "daftar belanja" : "kategori " + catById(state.cat).nama;
  $("infoJumlah").textContent = "Menampilkan " + tampil.length + " dari " + items.length + " (" + namaTampilan + ")";

  // lencana daftar belanja
  var n = perluBeli().length;
  var badge = $("badgeBelanja");
  badge.textContent = n;
  badge.classList.toggle("hidden", n === 0);
  badge.classList.toggle("flex", n > 0);
  var aktif = state.cat === "BELANJA";
  $("btnBelanja").classList.toggle("ring-8", aktif);
  $("btnBelanja").classList.toggle("ring-red-300", aktif);
  $("bannerBelanja").classList.toggle("hidden", !aktif);

  // pasang klik tombol kartu
  var tombol = box.querySelectorAll("[data-aksi]");
  for (var i = 0; i < tombol.length; i++) {
    tombol[i].addEventListener("click", function () {
      var aksi = this.getAttribute("data-aksi");
      var id = this.getAttribute("data-id");
      if (aksi === "kurang") geserStok(id, -1);
      else if (aksi === "tambah") geserStok(id, 1);
      else if (aksi === "tambah5") geserStok(id, 5);
      else if (aksi === "tambah10") geserStok(id, 10);
      else if (aksi === "ubah") bukaForm(id);
      else if (aksi === "hapus") mintaHapus(id);
    });
  }
}

/* ---------- UBAH STOK ---------- */
function cariItem(id) {
  for (var i = 0; i < items.length; i++) if (items[i].id === id) return items[i];
  return null;
}
function geserStok(id, delta) {
  var it = cariItem(id);
  if (!it) return;
  var baru = it.stok + delta;
  if (baru < 0) { toast("Stok " + it.nama + " sudah 0, tidak bisa dikurangi."); return; }
  it.stok = baru;
  simpan();
  render();
  var st = statusStok(it);
  if (st === "habis") toast(it.nama + " HABIS! Masuk Daftar Belanja.");
  else if (st === "menipis") toast(it.nama + " menipis (sisa " + it.stok + ").");
}

/* ---------- FORM TAMBAH / UBAH ---------- */
function bukaForm(idUbah) {
  editingId = idUbah || null;
  if (editingId) {
    var it = cariItem(editingId);
    if (!it) return;
    formCat = it.cat;
    formWarna = it.warna || "#DC2626";
    formSatuan = it.satuan;
    formStok = it.stok;
    formMin = it.min;
    $("judulForm").innerHTML = ikon("edit", "w-8 h-8") + "<span>Ubah Barang</span>";
    $("fNama").value = it.nama;
    $("fKodeManual").value = it.kode;
  } else {
    formCat = "B"; formWarna = "#DC2626"; formSatuan = "Pcs"; formStok = 0; formMin = 2;
    $("judulForm").innerHTML = ikon("plus", "w-8 h-8") + "<span>Tambah Barang</span>";
    $("fNama").value = "";
    $("fKodeManual").value = "";
  }
  $("fSatuan").value = formSatuan;
  $("fWarnaBebas").value = formWarna;
  $("fStok").textContent = formStok;
  $("fMin").textContent = formMin;
  gambarPilihKategori();
  gambarPilihSatuan();
  gambarPilihWarna();
  segarkanBoxKode();
  $("modalForm").classList.remove("hidden");
  setTimeout(function () { $("fNama").focus(); }, 50);
}
function tutupForm() { $("modalForm").classList.add("hidden"); }

function gambarPilihKategori() {
  var box = $("pilihKategori");
  var html = "";
  CATS.forEach(function (c) {
    var aktif = formCat === c.id;
    var cls = aktif ? "bg-blue-700 text-white border-blue-700" : "bg-slate-100 border-slate-300";
    html += '<button data-kat="' + c.id + '" class="' + cls + ' border-4 font-black rounded-2xl px-2 py-3 min-h-[72px]">' +
      '<span class="flex justify-center">' + ikon(c.icon, "w-9 h-9") + "</span>" +
      '<span class="block text-lg mt-1">' + c.nama + "</span></button>";
  });
  box.innerHTML = html;
  var semua = box.querySelectorAll("[data-kat]");
  for (var i = 0; i < semua.length; i++) {
    semua[i].addEventListener("click", function () {
      if (editingId) { toast("Kategori tidak bisa diubah. Hapus lalu buat baru bila salah."); return; }
      formCat = this.getAttribute("data-kat");
      gambarPilihKategori();
      segarkanBoxKode();
    });
  }
}

function segarkanBoxKode() {
  var c = catById(formCat);
  $("boxKodeOtomatis").classList.toggle("hidden", c.manualKode);
  $("boxKodeManual").classList.toggle("hidden", !c.manualKode);
  $("boxWarna").classList.toggle("hidden", !c.adaWarna);
  if (!c.manualKode) {
    $("previewKode").textContent = editingId ? cariItem(editingId).kode : kodeOtomatis(formCat);
  } else {
    $("labelKodeManual").textContent = "3. " + c.labelKode + ":";
    $("fKodeManual").placeholder = c.contohKode;
  }
}

function gambarPilihSatuan() {
  var box = $("pilihSatuan");
  var html = "";
  SATUAN.forEach(function (s) {
    var aktif = formSatuan === s;
    var cls = aktif ? "bg-blue-700 text-white" : "bg-slate-200";
    html += '<button data-sat="' + s + '" class="' + cls + ' font-black text-xl rounded-xl px-5 py-2">' + s + "</button>";
  });
  box.innerHTML = html;
  var semua = box.querySelectorAll("[data-sat]");
  for (var i = 0; i < semua.length; i++) {
    semua[i].addEventListener("click", function () {
      formSatuan = this.getAttribute("data-sat");
      $("fSatuan").value = formSatuan;
      gambarPilihSatuan();
    });
  }
}

function warnaByHex(h) {
  for (var i = 0; i < WARNA_EXTRA.length; i++) {
    if (WARNA_EXTRA[i].h.toLowerCase() === String(h).toLowerCase()) return WARNA_EXTRA[i];
  }
  return null;
}

function gambarPilihWarna() {
  var box = $("pilihWarna");
  var html = "";
  WARNA_EXTRA.forEach(function (w) {
    var aktif = formWarna.toLowerCase() === w.h.toLowerCase();
    var ring = aktif ? "ring-8 ring-blue-500 border-blue-500" : "border-slate-300";
    var ketNo = w.no ? "No. " + w.no : "cek label";
    html += '<button data-warna="' + w.h + '" title="' + w.n + '" class="flex flex-col items-center gap-1 bg-slate-100 border-4 ' + ring + ' rounded-2xl px-2 py-2 min-w-[84px]">' +
      '<span class="w-12 h-12 rounded-full border-4 border-slate-700" style="background:' + w.h + '"></span>' +
      '<span class="text-base font-bold leading-tight">' + w.n + "</span>" +
      '<span class="text-sm font-bold text-blue-800 leading-tight">' + ketNo + "</span></button>";
  });
  box.innerHTML = html;
  var semua = box.querySelectorAll("[data-warna]");
  for (var i = 0; i < semua.length; i++) {
    semua[i].addEventListener("click", function () {
      formWarna = this.getAttribute("data-warna");
      $("fWarnaBebas").value = formWarna;
      // bila kolom kode masih kosong dan warna punya nomor Extra, isikan otomatis
      var w = warnaByHex(formWarna);
      if (w && w.no && $("fKodeManual").value.trim() === "") {
        $("fKodeManual").value = "No. " + w.no;
      }
      gambarPilihWarna();
    });
  }
  var cocok = warnaByHex(formWarna);
  $("namaWarna").textContent = cocok
    ? cocok.n + (cocok.no ? " (Extra No. " + cocok.no + ")" : " (nomor lihat label)")
    : "Warna pilihan";
}

function simpanForm() {
  var c = catById(formCat);
  var nama = $("fNama").value.trim();
  if (!nama) { toast("Isi dulu nama barangnya."); $("fNama").focus(); return; }
  var satuan = $("fSatuan").value.trim() || "Pcs";
  var kode, warna = null;
  if (c.manualKode) {
    kode = $("fKodeManual").value.trim();
    if (!kode) { toast("Isi dulu " + c.labelKode + "."); $("fKodeManual").focus(); return; }
    if (c.adaWarna) warna = formWarna;
  } else {
    kode = editingId ? cariItem(editingId).kode : kodeOtomatis(formCat);
  }
  if (editingId) {
    var it = cariItem(editingId);
    it.nama = nama; it.satuan = satuan; it.stok = formStok; it.min = formMin;
    if (c.manualKode) { it.kode = kode; it.warna = warna; }
    toast("Perubahan disimpan.");
  } else {
    items.push({ id: uid(), cat: formCat, nama: nama, kode: kode, warna: warna,
      satuan: satuan, stok: formStok, min: formMin, dibuat: Date.now() });
    toast(nama + " (" + kode + ") tersimpan.");
  }
  simpan();
  tutupForm();
  render();
}

/* ---------- HAPUS + KONFIRMASI ---------- */
function mintaHapus(id) {
  var it = cariItem(id);
  if (!it) return;
  $("teksHapus").textContent = 'Hapus "' + it.nama + " (" + it.kode + ')"?';
  aksiHapus = function () {
    items = items.filter(function (x) { return x.id !== id; });
    simpan();
    render();
    toast("Barang dihapus.");
  };
  $("modalHapus").classList.remove("hidden");
}

/* ---------- EXPORT / IMPORT ---------- */
function namaFileBackup() {
  var d = new Date();
  function p(n) { return (n < 10 ? "0" : "") + n; }
  return "cadangan-stok-jahit-" + d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate()) +
    "-" + p(d.getHours()) + p(d.getMinutes()) + ".json";
}
function exportJSON() {
  var blob = new Blob([JSON.stringify(items, null, 2)], { type: "application/json" });
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = namaFileBackup();
  document.body.appendChild(a);
  a.click();
  setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  toast("File cadangan diunduh (" + items.length + " barang).");
}
function importJSON(file) {
  var baca = new FileReader();
  baca.onload = function () {
    var data;
    try {
      data = JSON.parse(baca.result);
    } catch (e) { toast("File tidak bisa dibaca. Pastikan file cadangan yang benar."); return; }
    if (!Array.isArray(data)) { toast("Isi file tidak sesuai."); return; }
    var bersih = [];
    for (var i = 0; i < data.length; i++) {
      var x = data[i] || {};
      if (!x.nama || !x.kode || !x.cat) continue;
      bersih.push({
        id: String(x.id || uid()), cat: String(x.cat), nama: String(x.nama), kode: String(x.kode),
        warna: x.warna || null, satuan: String(x.satuan || "Pcs"),
        stok: Math.max(0, parseInt(x.stok, 10) || 0), min: Math.max(0, parseInt(x.min, 10) || 0),
        dibuat: parseInt(x.dibuat, 10) || Date.now()
      });
    }
    if (bersih.length === 0) { toast("File tidak berisi data barang yang valid."); return; }
    $("teksHapus").textContent = "Ganti SEMUA data dengan file? (" + bersih.length + " barang)";
    aksiHapus = function () {
      items = bersih;
      state = { cat: "ALL", cari: "", digit: "" };
      $("inputCari").value = "";
      simpan();
      render();
      toast("Data dikembalikan (" + bersih.length + " barang).");
    };
    $("modalHapus").classList.remove("hidden");
  };
  baca.readAsText(file);
}

/* ---------- PASANG SEMUA KLIK ---------- */
function pasangKlik() {
  $("btnTambah").addEventListener("click", function () { bukaForm(null); });
  $("btnBelanja").addEventListener("click", function () {
    state.cat = state.cat === "BELANJA" ? "ALL" : "BELANJA";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  $("btnKembali").addEventListener("click", function () { state.cat = "ALL"; render(); });

  $("inputCari").addEventListener("input", function () { state.cari = this.value.trim(); render(); });
  $("btnHapusCari").addEventListener("click", function () {
    $("inputCari").value = ""; state.cari = ""; render(); $("inputCari").focus();
  });

  $("btnHapusDigit").addEventListener("click", function () {
    state.digit = state.digit.slice(0, -1); render();
  });
  $("btnBersihDigit").addEventListener("click", function () { state.digit = ""; render(); });

  $("btnBatal").addEventListener("click", tutupForm);
  $("btnSimpan").addEventListener("click", simpanForm);

  $("stokMin").addEventListener("click", function () { formStok = Math.max(0, formStok - 1); $("fStok").textContent = formStok; });
  $("stokPlus").addEventListener("click", function () { formStok++; $("fStok").textContent = formStok; });
  $("minMin").addEventListener("click", function () { formMin = Math.max(0, formMin - 1); $("fMin").textContent = formMin; });
  $("minPlus").addEventListener("click", function () { formMin++; $("fMin").textContent = formMin; });

  $("fSatuan").addEventListener("input", function () {
    formSatuan = this.value.trim() || "Pcs";
    gambarPilihSatuan();
  });
  $("fWarnaBebas").addEventListener("input", function () {
    formWarna = this.value;
    gambarPilihWarna();
  });
  $("fNama").addEventListener("keydown", function (e) { if (e.key === "Enter") simpanForm(); });
  $("fKodeManual").addEventListener("keydown", function (e) { if (e.key === "Enter") simpanForm(); });

  $("btnTidakJadi").addEventListener("click", function () {
    aksiHapus = null; $("modalHapus").classList.add("hidden");
  });
  $("btnYaHapus").addEventListener("click", function () {
    $("modalHapus").classList.add("hidden");
    if (aksiHapus) { var f = aksiHapus; aksiHapus = null; f(); }
  });

  $("btnExport").addEventListener("click", exportJSON);
  $("btnImport").addEventListener("click", function () { $("fileImport").click(); });
  $("fileImport").addEventListener("change", function () {
    if (this.files && this.files[0]) importJSON(this.files[0]);
    this.value = "";
  });
  $("btnContoh").addEventListener("click", function () {
    $("teksHapus").textContent = "Kembalikan 8 data contoh? (Data sekarang akan diganti)";
    aksiHapus = function () {
      items = dataContoh();
      state = { cat: "ALL", cari: "", digit: "" };
      $("inputCari").value = "";
      simpan();
      render();
      toast("Data contoh dikembalikan.");
    };
    $("modalHapus").classList.remove("hidden");
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { tutupForm(); aksiHapus = null; $("modalHapus").classList.add("hidden"); }
  });
}

/* ---------- MULAI ---------- */
gambarIkonStatis();
muat();
renderKeypad();
pasangKlik();
render();
