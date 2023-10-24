const numberOfCandles =8; // Liczba świeczek
const cake = document.querySelector('.cake');
const candlesContainer = document.querySelector('.candles');

for (let i = 0; i < numberOfCandles; i++) {
    const angle = (i / numberOfCandles) * 10 * Math.PI; // Kąt między świeczkami
    const radius = 90; // Promień okręgu
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    const candle = document.createElement('div');
    candle.classList.add('candle');
    candle.style.left = `calc(49% + ${x}px)`;
    candle.style.top = `calc(40% + ${y}px)`;
    
    const flame = document.createElement('div');
    flame.classList.add('flame');
    candle.appendChild(flame);

    candlesContainer.appendChild(candle);

    // Dodajemy obsługę zdarzeń myszki
    candle.addEventListener('mouseover', function () {
        lightCandle(candle);
    });

    candle.addEventListener('mouseout', function () {
        extinguishCandle(candle);
    });
}

function lightCandle(candle) {
    // Znajdujemy płomień wewnątrz konkretnej świeczki
    const flame = candle.querySelector('.flame');
    flame.style.display = 'block';
}

function extinguishCandle(candle) {
    // Znajdujemy płomień wewnątrz konkretnej świeczki
    const flame = candle.querySelector('.flame');
    flame.style.display = 'none';
}