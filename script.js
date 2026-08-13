/* ================================= */
/* AINI.exe                          */
/* An apology from me               */
/* ================================= */


/* ========================= */
/* PAGE SYSTEM */
/* ========================= */

let currentPage = 0;

function nextPage(pageNumber) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const target = document.getElementById(
        "page" + pageNumber
    );

    target.classList.add("active");

    currentPage = pageNumber;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ========================= */
/* BOOT SEQUENCE */
/* ========================= */

const bootText = document.getElementById("bootText");
const progressBar = document.getElementById("progressBar");
const bootStatus = document.getElementById("bootStatus");
const startBtn = document.getElementById("startBtn");

const bootLines = [
    "Loading memories...",
    "Checking mistakes...",
    "Checking regrets...",
    "Compiling apology...",
    "Searching for courage...",
    "Preparing something I should have said long ago..."
];

let lineIndex = 0;

function bootSequence() {

    if (lineIndex < bootLines.length) {

        bootText.innerHTML +=
            `<br><span class="muted">> ${bootLines[lineIndex]}</span>`;

        lineIndex++;

        progressBar.style.width =
            ((lineIndex / bootLines.length) * 100) + "%";

        setTimeout(bootSequence, 700);

    } else {

        bootStatus.innerHTML =
            '<span class="pink">System ready.</span>';

        startBtn.classList.remove("hidden");
    }
}

setTimeout(bootSequence, 700);


/* ========================= */
/* START EXPERIENCE */
/* ========================= */

function startExperience() {

    startMusic();

    nextPage(1);
}


/* ========================= */
/* MUSIC */
/* ========================= */

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let musicPlaying = false;

function startMusic() {

    music.volume = 0.35;

    music.play()
        .then(() => {

            musicPlaying = true;

            musicBtn.innerHTML =
                "♫ MUSIC: ON";

        })
        .catch(() => {

            musicPlaying = false;

            musicBtn.innerHTML =
                "♫ MUSIC: OFF";

        });
}

function toggleMusic() {

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

        musicBtn.innerHTML =
            "♫ MUSIC: OFF";

    } else {

        music.play()
            .then(() => {

                musicPlaying = true;

                musicBtn.innerHTML =
                    "♫ MUSIC: ON";

            });
    }
}


/* ========================= */
/* MEMORY SYSTEM */
/* ========================= */

function openMemory(number) {

    const output =
        document.getElementById("memoryOutput");

    const memories = {

        1: `
            <span class="pink">>>> the_beginning opened</span>
            <br><br>
            Kadang-kadang saya fikir tentang bagaimana
            semuanya bermula dan bagaimana seseorang yang
            pada awalnya hanya seorang kawan akhirnya menjadi
            seseorang yang sangat bermakna.
        `,

        2: `
            <span class="pink">>>> the_good_days opened</span>
            <br><br>
            Ada terlalu banyak perkara kecil yang mungkin
            nampak biasa, tetapi bagi saya semuanya menjadi
            sebahagian daripada kenangan yang saya hargai.
            Ketawa, cerita random, gurauan dan masa yang kita
            pernah luangkan bersama.
        `,

        3: `
            <span class="pink">>>> things_you_did_for_me opened</span>
            <br><br>
            Awak selalu ada dengan cara awak sendiri.
            Kadang-kadang saya terlalu biasa dengan kehadiran
            awak sampai saya lupa bahawa tidak semua orang
            akan memilih untuk terus tinggal.
        `,

        4: `
            <span class="pink">>>> things_i_should_have_appreciated opened</span>
            <br><br>
            Saya sepatutnya menghargai kesabaran awak.
            Saya sepatutnya menghargai setiap kali awak
            memberi ruang, setiap kali awak memaafkan,
            dan setiap kali awak masih memilih untuk ada.
        `
    };

    output.innerHTML = memories[number];

    output.style.animation = "none";

    setTimeout(() => {
        output.style.animation =
            "pageIn 0.4s ease";
    }, 10);
}


/* ========================= */
/* FINAL ANSWER */
/* ========================= */

function finalAnswer(answer) {

    const response =
        document.getElementById("finalResponse");

    if (answer === "yes") {

        response.innerHTML = `
            <div>
                <p>
                    <strong>ACCESS GRANTED ♡</strong>
                </p>

                <p>
                    Terima kasih kerana masih memberikan saya
                    sedikit ruang.
                </p>

                <p>
                    Saya tak akan anggap peluang ini sebagai
                    sesuatu yang saya layak dapat begitu sahaja.
                    Saya akan cuba menjaganya melalui perbuatan.
                </p>

                <button
                    class="code-btn"
                    onclick="finishWebsite('yes')"
                >
                    >>> close_program()
                </button>
            </div>
        `;

    } else {

        response.innerHTML = `
            <div>
                <p>
                    <strong>ACCESS PAUSED...</strong>
                </p>

                <p>
                    Tak apa.
                </p>

                <p>
                    Awak tak perlu paksa diri untuk terus
                    maafkan saya. Ambillah masa yang awak perlukan.
                    Saya akan hormat ruang yang awak perlukan.
                </p>

                <button
                    class="code-btn"
                    onclick="finishWebsite('time')"
                >
                    >>> close_program()
                </button>
            </div>
        `;
    }
}


/* ========================= */
/* END WEBSITE */
/* ========================= */

function finishWebsite(answer) {

    const title =
        document.getElementById("endingTitle");

    const text =
        document.getElementById("endingText");

    if (answer === "yes") {

        title.innerHTML =
            "Thank you, Aini. ♡";

        text.innerHTML =
            "Saya akan cuba buktikan bahawa peluang yang awak beri tidak akan saya sia-siakan.";

    } else {

        title.innerHTML =
            "I'll understand. ♡";

        text.innerHTML =
            "Tak kira berapa lama masa yang awak perlukan, saya tetap menghargai kerana awak sudi membaca sampai ke penghujung.";

    }

    nextPage(7);
}


/* ========================= */
/* FLOATING PARTICLES */
/* ========================= */

const particleContainer =
    document.getElementById("particles");

const symbols = [
    "♡",
    "✦",
    "·",
    "♡",
    "✧"
];

function createParticle() {

    const particle =
        document.createElement("div");

    particle.classList.add("particle");

    particle.innerHTML =
        symbols[
            Math.floor(
                Math.random() * symbols.length
            )
        ];

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.fontSize =
        (Math.random() * 15 + 8) + "px";

    particle.style.animationDuration =
        (Math.random() * 12 + 8) + "s";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    particleContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 20000);
}

setInterval(createParticle, 600);


/* ========================= */
/* KEYBOARD EASTER EGG */
/* ========================= */

let secretCode = "";

document.addEventListener("keydown", (event) => {

    secretCode += event.key.toLowerCase();

    if (secretCode.length > 20) {
        secretCode =
            secretCode.slice(-20);
    }

    if (secretCode.includes("aini")) {

        alert(
            "♡ secret.py\n\nThank you for making it this far, Aini."
        );

        secretCode = "";
    }
});
