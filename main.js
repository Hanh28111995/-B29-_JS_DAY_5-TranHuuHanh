document.getElementById("btn1").onclick = function () {
    var so1 = parseInt(document.getElementById("sn1").value) || 0;
    var so2 = parseInt(document.getElementById("sn2").value) || 0;
    var so3 = parseInt(document.getElementById("sn3").value) || 0;
    var kv = parseFloat(document.getElementById("kv").value);
    var dt = parseFloat(document.getElementById("dt").value);
    var dc = parseFloat(document.getElementById("diem_chuan").value);
    var tong = parseFloat(kv + dt + so1 + so2 + so3);
    if ((so1 == 0) || (so2 == 0) || (so3 == 0)) { var sum = "Tổng điểm là : 0" + " => RỚT" }
    else {
        if (tong >= dc) { var sum = "Tổng điểm là : " + tong + " => ĐẬU" }
        else { var sum = "Tổng điểm là : " + tong + " => RỚT" }
    }
    document.getElementById("yn").innerHTML = sum;
};
//////////////////////////////////////////////////////////////////////////////////////////





//////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("btn3").onclick = function () {
    var dg1 = 0, dg2 = 0, dg3 = 0, dg4 = 0, dg5 = 0;
    var sum = 0;
    var so5 = parseInt(document.getElementById("sn5").value) || 0;
    var tien = new Intl.NumberFormat("vn-VN");
    if (so5 <= 50) { dg1 = 500; sum = so5 * dg1; }
    else {
        if (so5 <= 100) { dg2 = 650; dg1 = 500; sum = (50 * dg1) + (so5 - 50) * dg2; }
        else {
            if (so5 <= 200) { dg3 = 850; dg2 = 650; dg1 = 500; sum = (50 * dg1) + (50 * dg2) + (so5 - 100) * dg3; }
            else {
                if (so5 <= 350) { dg4 = 1100; dg3 = 850; dg2 = 650; dg1 = 500; sum = (50 * dg1) + (50 * dg2) + (100 * dg3) + (so5 - 200) * dg4; }
                else { dg5 = 1300; dg4 = 1100; dg3 = 850; dg2 = 650; dg1 = 500; sum = (50 * dg1) + (50 * dg2) + (100 * dg3) + (200 * dg4) + (so5 - 350) * dg5; }
            }
        }
    }
    document.getElementById("scsl").innerHTML = tien.format(sum) + " VND";
}


//////////////////////////////////////////////////////////////////////////////////////////