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
  var tienThuNhap = document.getElementById("thuNhap").value * 1;
  console.log(tienThuNhap);
  var nguoiPhuThuoc = document.getElementById("soNguoi").value * 1;

  document.getElementById("hienThiThue").innerHTML = tienThue;
}
document.querySelector("#tinhTienThue").onclick = tienThue;
