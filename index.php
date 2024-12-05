<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hacked By Harun Firoz /-</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        @font-face {
            font-family: 'Arabic';
            src: url('https://fonts.googleapis.com/css2?family=Amiri&display=swap');
        }

        body {
            background-color: #000;
            color: #0f0;
            font-family: 'Courier New', monospace;
            overflow-x: hidden;
            min-height: 100vh;
            position: relative;
            cursor: pointer;
        }

        .background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">☪️</text></svg>') center/50px repeat;
            opacity: 0.1;
            z-index: -1;
        }

        .container {
            text-align: center;
            padding: 2rem;
            max-width: 800px;
            margin: 0 auto;
            animation: glitch 2s infinite;
        }

        .title {
            font-size: clamp(2em, 5vw, 3em);
            color: #ff0000;
            text-shadow: 0 0 10px #ff0000;
            margin: 2rem 0;
            animation: flicker 0.5s infinite;
        }

        .kalima-en {
            color: #00ff00;
            font-size: clamp(1.5em, 4vw, 2.5em);
            text-shadow: 0 0 10px #00ff00;
            margin: 1rem 0;
        }

        .kalima {
            font-family: 'Arabic', serif;
            font-size: clamp(1.5em, 4vw, 2em);
            color: #fff;
            margin: 2rem 0;
            direction: rtl;
        }

        .logo {
            width: clamp(150px, 40vw, 200px);
            height: clamp(150px, 40vw, 200px);
            margin: 1rem;
            animation: shake 1.5s infinite;
            border-radius: 50%;
            border: 5px solid #00ff00;
            box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
            object-fit: cover;
        }

        .reason {
            background: rgba(255, 0, 0, 0.1);
            border: 1px solid #ff0000;
            padding: 1rem;
            margin: 2rem auto;
            border-radius: 5px;
            max-width: 90%;
        }

        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-3px) rotate(-3deg); }
            75% { transform: translateX(3px) rotate(3deg); }
        }

        @keyframes glitch {
            0% { transform: translate(0) }
            20% { transform: translate(-2px, 2px) }
            40% { transform: translate(-2px, -2px) }
            60% { transform: translate(2px, 2px) }
            80% { transform: translate(2px, -2px) }
            100% { transform: translate(0) }
        }

        @keyframes flicker {
            0% { opacity: 1 }
            50% { opacity: 0.8 }
            100% { opacity: 1 }
        }

        .matrix-effect {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        }

        @media (max-width: 768px) {
            .container {
                padding: 1rem;
            }
            
            .reason, .greetings {
                padding: 0.8rem;
            }
        }
    </style>
</head>
<body onclick="handleClick()">
    <div class="background"></div>
    <canvas class="matrix-effect" id="matrix"></canvas>
    
    <div class="container">
        <h1 class="title">Hacked By Gaara愛.</h1>
        <div class="kalima">لَا إِلَٰهَ إِلَّا ٱللَّٰهُ مُحَمَّدٌ رَسُولُ ٱللَّٰهِ</div>
        <div class="kalima-en">We Are Waiting For Ghazwatul-Hind!</div>
        
        <img src="https://graph.facebook.com/61552057613979/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662" alt="harunfirox1" class="logo">
        
        <div class="reason">
            <h2 style="color: #ff0000;">Reason for Hack:</h2>
            <p style="font-size: 1.4em;">• Spreading fake news about Bangladesh</p>
            <p style="font-size: 1.4em;">• Interfering in Bangladesh's matters</p>
        </div>
        
        <p style="color: #fff; margin-top: 2rem;">
            Contact: @harunfirox1<br>
            Assalamu Alaikum
        </p>
    </div>

    <audio id="bgMusic" loop>
        <source src="https://github.com/xspoilt-dev/deface-page/raw/refs/heads/main/Y2meta.app%20-%20Slowed%20Nasheeds%20that%20will%20increase%20your%20testosterone%20(128%20kbps).mp3" type="audio/mpeg">
    </audio>

    <script>
        // Matrix effect
        const canvas = document.getElementById('matrix');
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();

        const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
        const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nums = '0123456789';
        const alphabet = katakana + latin + nums;

        const fontSize = 16;
        const columns = canvas.width/fontSize;

        const rainDrops = Array(Math.floor(columns)).fill(canvas.height);

        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = fontSize + 'px monospace';

            for(let i = 0; i < rainDrops.length; i++) {
                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));

                ctx.fillStyle = Math.random() > 0.5 ? '#0F0' : '#F00';
                ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
                
                if(rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    rainDrops[i] = 0;
                }
                rainDrops[i]++;
            }
        }

        setInterval(draw, 30);

        let musicStarted = false;
        function handleClick() {
            if (!musicStarted) {
                document.getElementById('bgMusic').play();
                musicStarted = true;
            }
            window.open('https://m.facebook.com/harunfirox1', '_blank');
        }

        window.addEventListener('resize', resizeCanvas);
    </script>
</body>
</html>