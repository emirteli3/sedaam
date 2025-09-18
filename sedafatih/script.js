const evetBtn = document.getElementById('evet');
const hayirBtn = document.getElementById('hayir');
const evetMesaj = document.getElementById('evet-mesaj');

let evetFontSize = 24;
let evetPadding = 20;
let mesajlar = [
    "Emin misin?",
    "Son kararın mı?",
    "Gerçekten mi?",
    "Bir daha düşün!",
    "Şaka yapmıyorsun değil mi?",
    "Kararından emin misin?",
    "Vazgeçmek ister misin?",
    "Bu son şansın!",
    "Yeşil butona basmayı dene!",
    "Hala hayır diyorsun!"
];
let mesajIndex = 0;

const audio = document.getElementById('audio');


// Evet tuşuna basınca 2:50'den başlat
const emojiMuteBtn = document.getElementById('emojiMuteBtn');
evetBtn.addEventListener('click', () => {
    audio.currentTime = 170;
    audio.play();
    document.body.style.backgroundImage = "url('d44fc950-3db9-4b4c-a9db-4678c89a5c28.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.getElementById('main-title').style.display = 'none';
    document.getElementById('main-buttons').style.display = 'none';
    emojiMuteBtn.style.display = 'block';
});

let isMuted = false;
emojiMuteBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    audio.muted = isMuted;
    emojiMuteBtn.textContent = isMuted ? '🔇' : '🎵';
});

// Hayır tuşu davranışı
hayirBtn.addEventListener('click', () => {
    evetFontSize += 4;
    evetPadding += 4;
    evetBtn.style.fontSize = evetFontSize + 'px';
    evetBtn.style.padding = evetPadding + 'px ' + (evetPadding * 2) + 'px';
    evetMesaj.textContent = mesajlar[mesajIndex % mesajlar.length];
    mesajIndex++;

    // Hayır tuşunu ekranda rastgele bir konuma taşı
    const buttonsDiv = document.getElementById('main-buttons');
    const maxWidth = buttonsDiv.offsetWidth - hayirBtn.offsetWidth;
    const maxHeight = buttonsDiv.offsetHeight - hayirBtn.offsetHeight;
    const randomLeft = Math.floor(Math.random() * maxWidth);
    const randomTop = Math.floor(Math.random() * maxHeight);
    hayirBtn.style.left = randomLeft + 'px';
    hayirBtn.style.top = randomTop + 'px';
});
