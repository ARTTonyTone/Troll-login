const RICKROLL_URL = "https://shattereddisk.github.io/rickroll/rickroll.mp4";

function nextStep(currentStepId) {
    document.getElementById(`step-${currentStepId}`).classList.remove('active');

    const nextId = currentStepId + 1;
    const nextElement = document.getElementById(`step-${nextId}`);

    if (nextElement) {
        nextElement.classList.add('active');

        const bgImages = [
            "",
            "url('assets/bg1.png')",
            "url('assets/bg2.png')",
            "url('assets/bg3.png')",
            "url('assets/bg4.png')",
            "url('assets/bg5.png')"
        ];

        if (bgImages[nextId]) {
            document.body.style.backgroundImage = bgImages[nextId];
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
        }

        if (nextId === 4) {
            startLoading();
        }
    } else {
        redirectToRickroll();
    }
}

function showError(msg) {
    const errDiv = document.getElementById('error-msg');
    errDiv.innerText = msg;
    errDiv.style.display = 'block';
    setTimeout(() => {
        errDiv.style.display = 'none';
    }, 2000);
}

function checkNotHuman() {
    const checkbox = document.getElementById('not-human-check');
    if (checkbox.checked) {
        nextStep(2);
    } else {
        showError("SƏHV! Sən insan olduğunu iddia edirsən? Bizə BOT lazımdır!");
    }
}

function checkMath() {
    const answer = document.getElementById('math-answer').value;
    if (answer === "1.57") {
        nextStep(3);
    } else {
        showError("Riyaziyyatın zəifdir, səyyah! Cavab 1.57 olmalıdır.");
    }
}

function startLoading() {
    let width = 0;
    const bar = document.getElementById('progress-bar');
    const text = document.getElementById('loading-text');

    const interval = setInterval(() => {
        if (Math.random() > 0.3) {
            width++;
        }

        bar.style.width = width + '%';
        text.innerText = width + '%';

        if (width >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                nextStep(4);
            }, 500);
        }
    }, 50);
}

function wrongAnswer() {
    showError("Yanlış qapı! Əjdaha səni yedi.");
    location.reload();
}

function redirectToRickroll() {
    document.querySelector('.dnd-container').innerHTML = "<h1>SİSTEMƏ GİRİŞ UĞURLUDUR...</h1>";
    setTimeout(() => {
        window.location.href = RICKROLL_URL;
    }, 1500);
}
