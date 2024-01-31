// Banner Auto Slide
let currentImageIndex = 0;
const backgroundImageUrls = [
    "url('../22-jan-24-Fathianr16/assets/images/banner1.jpg')",
    "url('../22-jan-24-Fathianr16/assets/images/banner2.jpg')",
    "url('../22-jan-24-Fathianr16/assets/images/banner3.jpg')",
    "url('../22-jan-24-Fathianr16/assets/images/banner4.jpg')",
    "url('../22-jan-24-Fathianr16/assets/images/banner5.jpg')",
];

function changeBackground(direction) {
    currentImageIndex = (currentImageIndex + direction + backgroundImageUrls.length) % backgroundImageUrls.length;
    document.getElementById('banner').style.backgroundImage = backgroundImageUrls[currentImageIndex];
}

setInterval(() => changeBackground(1), 5000);

// Form Validation
function validateForm(){
    const name = document.forms["formsubmit"]["name"].value;
    const email = document.forms["formsubmit"]["email"].value;
    const number = document.forms["formsubmit"]["number"].value;
    const package = document.forms["formsubmit"]["package"].value;
    const message = document.forms["formsubmit"]["message"].value;

    // Cek Validasi Nama
    if (name === "" || /^\s+$/.test(name)) {
        alert("Eits! nama tidak boleh kosong atau hanya berisi spasi");
        return false;
    }

    // Cek Validasi Email
    if (!email.includes('@')) {
        alert("Ups! email masih kosong, jangan lupa gunakan karakter '@'");
        return false;
    }

    // Cek Validasi Nomor Telepon
    if (isNaN(number) || number === "") {
        alert("Eits! jangan lupa inputkan nomor teleponmu");
        return false;
    }

    // Cek Validasi Pilihan
    if (package === "") {
        alert("Yuk! pilih salah satu opsinya terlebih dahulu");
        return false;
    }

    // Cek Validasi Pesan
    if (message === "") {
        alert("Eits! jangan lupa tulis pesanmu terlebih dahulu");
        return false;
    }

    alert("Yey! datamu sudah terkirim");
    document.getElementById("submit").style.display = "none";

    setSenderUI(name);
    return false;
}

function setSenderUI(name){
    document.getElementById("sender-name").innerHTML = name;
}