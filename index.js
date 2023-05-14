console.log("ASddf");

//baitap1:quan ly tuyen sinh

function quanLyTuyenSinh() {
  var khuVuc = document.getElementById("chonKhuVuc").value;
  if (khuVuc == "a") {
    khuVuc = 2;
  } else if (khuVuc == "b") {
    khuVuc = 1;
  } else if (khuVuc == "c") {
    khuVuc = 0.5;
  }
  var doiTuong = document.getElementById("chonDoiTuong").value * 1;
  if (doiTuong == 1) {
    doiTuong = 2.5;
  } else if (doiTuong == 2) {
    doiTuong = 1.5;
  } else if (doiTuong == 3) {
    var doiTuong = 1;
  }
  console.log(khuVuc);
  console.log(doiTuong);
  var diemChuan = document.getElementById("diemTieuChuan").value * 1;
  var diemMon1 = document.getElementById("mon1").value * 1;
  var diemMon2 = document.getElementById("mon2").value * 1;
  var diemMon3 = document.getElementById("mon3").value * 1;
  var diemTong = diemMon1 + diemMon2 + diemMon3;

  var diemUuTien = khuVuc + doiTuong;
  var tongKet = diemTong + diemUuTien;
  if (tongKet >= diemChuan) {
    document.querySelector("#hienThiKetQua").innerHTML =
      "ban da dau ; " + "so diem:" + tongKet;
  } else {
    document.querySelector("#hienThiKetQua").innerHTML =
      "ban da rot ; " + "so diem:" + tongKet;
  }
  // return tongKet;
}

//bai tap 2 : tinh tien dien

function tienDien() {
  var hoTen = document.getElementById("nhapHoTen").value;
  var soKw = document.getElementById("nhapSoKw").value * 1;
  if (soKw <= 50) {
    var tinhTien = soKw * 500;
  } else if (50 < soKw <= 100) {
    var tinhTien = 50 * 500 + (soKw - 50) * 650;
  } else if (100 < soKw <= 200) {
    var tinhTien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (200 < soKw <= 350) {
    var tinhTien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  } else if (soKw > 350) {
    var tinhTien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
  }
  console.log(hoTen);
  console.log(tinhTien);
  document.querySelector("#hienThiTien").innerHTML =
    " ho ten : " + " " + hoTen + ";" + " Tien dien : " + " " + tinhTien;
}
document.querySelector("#tinhTienDien").onclick = tienDien;

//baitap3: tinh thue thu nhap ca nhan

function tienThue() {
  var nhapTen = document.getElementById("nhapVaoTen").value;
  var tienThuNhap = document.getElementById("thuNhap").value * 1;
  console.log(tienThuNhap);
  var nguoiPhuThuoc = document.getElementById("soNguoi").value * 1;
  var thuNhapChiuThue = tienThuNhap - 4e6 - 1.6e6 * nguoiPhuThuoc;

  if (thuNhapChiuThue <= 6e7) {
    var thueThuNhap = (thuNhapChiuThue * 5) / 100;
  } else if (6e7 < thuNhapChiuThue <= 12e7) {
    var thueThuNhap = (6e7 * 5) / 100 + ((thuNhapChiuThue - 6e7) * 10) / 100;
  } else if (12e7 < thuNhapChiuThue <= 21e7) {
    var thueThuNhap =
      (6e7 * 5) / 100 +
      (12e7 * 10) / 100 +
      ((thuNhapChiuThue - 12e7) * 15) / 100;
  } else if (21e7 < thuNhapChiuThue <= 384e6) {
    var thueThuNhap =
      (6e7 * 5) / 100 +
      (12e7 * 10) / 100 +
      (21e7 * 15) / 100 +
      ((thuNhapChiuThue - 21e7) * 20) / 100;
  } else if (384e6 < thuNhapChiuThue <= 624e6) {
    var thueThuNhap =
      (6e7 * 5) / 100 +
      (12e7 * 10) / 100 +
      (21e7 * 15) / 100 +
      (384e6 * 20) / 100 +
      ((thuNhapChiuThue - 384e6) * 25) / 100;
  } else if (624e6 < thuNhapChiuThue <= 96e7) {
    var thueThuNhap =
      (6e7 * 5) / 100 +
      (12e7 * 10) / 100 +
      (21e7 * 15) / 100 +
      (384e6 * 20) / 100 +
      (624e6 * 25) / 100 +
      ((thuNhapChiuThue - 624e6) * 20) / 100;
  } else if (thuNhapChiuThue > 9e8) {
    var thueThuNhap =
      (6e7 * 5) / 100 +
      (12e7 * 10) / 100 +
      (21e7 * 15) / 100 +
      (384e6 * 20) / 100 +
      (624e6 * 25) / 100 +
      (9e8 * 30) / 100 +
      ((thuNhapChiuThue - 9e8) * 35) / 100;
  }
  document.getElementById("hienThiThue").innerHTML =
    " ho ten: " +
    nhapTen +
    " , tien thue thu nhap ca nhan: " +
    thueThuNhap +
    " VND";
}
document.querySelector("#tinhTienThue").onclick = tienThue;

//baitap4

function tinhTienCap() {
  var maKh = document.getElementById("maKH").value;
  var soKenh = document.getElementById("soKenh").value * 1;
  var chonKH = document.getElementById("chonKhach").value;
  var soKetNoi = document.getElementById("soKetNoi").value * 1;
  if (chonKH == "doanhNghiep" && soKetNoi <= 10) {
    var tienCap = 15 + 75 + 50 * soKenh;
  } else if (chonKH == "doanhNghiep" && soKetNoi > 10) {
    var tienCap = 15 + 75 + soKetNoi * 5 + 50 * soKenh;
  } else if (chonKH == "nhaDan") {
    var tienCap = 4.5 + 20.5 + soKenh * 7.5;
  }
  document.querySelector("#hienThiTienCap").innerHTML =
    " ma khach hang : " + maKh + ", tien cap : " + "$" + tienCap;
}
function doanhNghiep() {
  var chonKH = document.getElementById("chonKhach").value;
  if (chonKH == "doanhNghiep") {
    console.log("chonKH");
    document.getElementById("soKetNoi").style.display = `block`;
  } else if (chonKH == "nhaDan") {
    document.getElementById("soKetNoi").style.display = `none`;
  }
}
