function triggerParty() {
    // Fire confetti blast
    confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
    });

    // Reveal the secret birthday message section smoothly
    const secretMsg = document.getElementById('secretMessage');
    secretMsg.style.display = 'block';

    // Optional: Scroll down slightly to show message
    secretMsg.scrollIntoView({ behavior: 'smooth' });
}