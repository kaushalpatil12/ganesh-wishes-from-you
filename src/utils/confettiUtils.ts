
interface ConfettiOptions {
  count?: number;
  colors?: string[];
  shapes?: Array<'circle' | 'square' | 'triangle' | 'om' | 'modak'>;
}

export const triggerConfetti = (options: ConfettiOptions = {}) => {
  const {
    count = 100,
    colors = ['#FEC6A1', '#F97316', '#C2410C', '#FEF7CD', '#22C55E', '#FFD700', '#FF6B6B'],
    shapes = ['circle', 'square', 'triangle', 'om', 'modak'],
  } = options;
  
  const container = document.body;
  
  for (let i = 0; i < count; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 10 + 5;
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    
    // Handle different shapes
    if (shape === 'circle') {
      confetti.style.backgroundColor = color;
      confetti.style.borderRadius = '50%';
    } else if (shape === 'square') {
      confetti.style.backgroundColor = color;
      confetti.style.borderRadius = '0';
    } else if (shape === 'triangle') {
      confetti.style.backgroundColor = 'transparent';
      confetti.style.width = '0';
      confetti.style.height = '0';
      confetti.style.borderLeft = `${size/2}px solid transparent`;
      confetti.style.borderRight = `${size/2}px solid transparent`;
      confetti.style.borderBottom = `${size}px solid ${color}`;
    } else if (shape === 'om' || shape === 'modak') {
      // Special shapes are actually just colored circles for simplicity
      confetti.style.backgroundColor = color;
      confetti.style.borderRadius = '50%';
    }
    
    confetti.style.setProperty('--color', color);
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
