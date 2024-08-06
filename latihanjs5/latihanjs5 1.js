var hari = "senin";

switch (hari) {
  case "senin":
    var jenis = "weekday";
    break;

  case "Selasa":
    var jenis = "weekday";
    break;

  case "Rabu":
    var jenis = "weekday";
    break;

  case "Kamis":
    var jenis = "weekday";
    break;

  case "Jumat":
    var jenis = "weekday";
    break;

  case "Sabtu":
    var jenis = "weekend";
    break;

  case "Minggu":
    var jenis = "Weekend";
    break;

  default:
    "nama hari tidak valid";
    break;
}
console.log(jenis);
