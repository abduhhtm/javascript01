var nilai = 70
var kehadiran = 9
var totalpertemuan = 25
var presentasekehadiran = kehadiran/totalpertemuan*100


if (nilai > 85) {
 console.log("katagori a");
  if (presentasekehadiran >= 75) {
    console.log("lulus");
  } else{
    console.log("tidak lulus");
  }

} else if (nilai >70 && nilai <=85) {
    console.log("katagori b");
    if (presentasekehadiran >75) {
        console.log("lulus");
    }else {
        console.log("tidak lulus");
    }

}  else if (nilai >=50 && nilai <=70) {
    console.log("katagori c");
    if (presentasekehadiran >75) {
        console.log("lulus");
    }else {
        console.log("tidak lulus");
    }

} else if (nilai <50) {
        console.log("tidak lulus");
    }


// tugas gambar 2

var pendaftaran = true;
var pembayaran = false;

if (pendaftaran === true) {
  if (pembayaran === true) {
    console.log("Dapat mengikuti Kursus");
  } else {
    console.log("Tidak dapat mengikuti Kursus");
  }
} else {
  console.log("Tidak dapat mengikuti Kursus")
}


