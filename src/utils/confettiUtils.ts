
interface ConfettiOptions {
  count?: number;
  colors?: string[];
}

export const triggerConfetti = (options: ConfettiOptions = {}) => {
  const {
    count = 100,
    colors = ['#FEC6A1', '#F97316', '#C2410C', '#FEF7CD', '#22C55E'],
  } = options;
  
  const container = document.body;
  
  for (let i = 0; i < count; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 10 + 5;
    const shape = Math.random() > 0.5 ? 'circle' : 'square';
    
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    confetti.style.backgroundColor = color;
    confetti.style.borderRadius = shape === 'circle' ? '50%' : '0';
    
    confetti.style.setProperty('--x', `${Math.random() * 100 - 50}vw`);
    confetti.style.setProperty('--y', `${-(Math.random() * 20 + 10)}vh`);
    confetti.style.setProperty('--rotate', `${Math.random() * 360}deg`);
    confetti.style.setProperty('--fall-duration', `${Math.random() * 3 + 2}s`);
    confetti.style.setProperty('--fall-delay', `${Math.random() * 2}s`);
    confetti.style.setProperty('--opacity', `${Math.random() * 0.5 + 0.5}`);
    
    container.appendChild(confetti);
    
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
};
