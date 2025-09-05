# CyberMatrix Particles - Usage Examples

This file contains practical examples of how to use CyberMatrix Particles in different scenarios.

## Basic Examples

### Minimal Setup
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="cyber-matrix-particles.css">
</head>
<body class="cyber-matrix-enabled">
    <h1>My Cyberpunk Website</h1>
    <script src="cyber-matrix-particles.js"></script>
    <script>
        new CyberMatrixParticles();
    </script>
</body>
</html>
```

### Login Page
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="cyber-matrix-particles.css">
    <style>
        .login-form {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 400px;
            padding: 2rem;
        }
    </style>
</head>
<body class="cyber-matrix-enabled">
    <div class="cyber-container enhanced login-form">
        <h2 class="cyber-text heading">Access Terminal</h2>
        <form>
            <input type="text" class="cyber-input" placeholder="Username" required>
            <input type="password" class="cyber-input" placeholder="Password" required>
            <button type="submit" class="cyber-button">Initialize</button>
        </form>
    </div>
    
    <script src="cyber-matrix-particles.js"></script>
    <script>
        new CyberMatrixParticles({
            particleColor: '#00ff41',
            showMatrixRain: true,
            matrixSpeed: 1.5
        });
    </script>
</body>
</html>
```

### Gaming Website Header
```html
<div class="gaming-header" style="position: relative; height: 100vh;">
    <div class="content" style="position: relative; z-index: 10; text-align: center; padding-top: 30vh;">
        <h1 class="cyber-text heading">CYBER WARRIORS</h1>
        <p class="cyber-text subheading">Enter the Digital Battlefield</p>
        <button class="cyber-button">PLAY NOW</button>
    </div>
</div>

<script>
new CyberMatrixParticles({
    target: document.querySelector('.gaming-header'),
    particleColor: '#ff6b6b',
    particleHoverColor: '#ffff00',
    showConnections: true,
    dataPacketChance: 0.05,
    backgroundGradient: 'linear-gradient(135deg, #000000 0%, #330000 50%, #000000 100%)'
});
</script>
```

## Framework Integration Examples

### React Component
```jsx
import React, { useEffect, useRef } from 'react';

const CyberBackground = ({ children, config = {} }) => {
    const containerRef = useRef(null);
    const particlesRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            particlesRef.current = new CyberMatrixParticles({
                target: containerRef.current,
                ...config
            });
        }

        return () => {
            if (particlesRef.current) {
                particlesRef.current.destroy();
            }
        };
    }, [config]);

    return (
        <div ref={containerRef} style={{ position: 'relative', minHeight: '100vh' }}>
            <div style={{ position: 'relative', zIndex: 10 }}>
                {children}
            </div>
        </div>
    );
};

// Usage
function App() {
    return (
        <CyberBackground config={{ particleColor: '#ff0080', showGrid: false }}>
            <h1>My React App</h1>
            <p>Content goes here...</p>
        </CyberBackground>
    );
}
```

### Vue.js Component
```vue
<template>
    <div ref="container" class="cyber-container">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CyberBackground',
    props: {
        config: {
            type: Object,
            default: () => ({})
        }
    },
    mounted() {
        this.particles = new CyberMatrixParticles({
            target: this.$refs.container,
            ...this.config
        });
    },
    beforeUnmount() {
        if (this.particles) {
            this.particles.destroy();
        }
    }
}
</script>

<style scoped>
.cyber-container {
    position: relative;
    min-height: 100vh;
}
.content {
    position: relative;
    z-index: 10;
}
</style>
```

### Angular Component
```typescript
import { Component, OnInit, OnDestroy, Input, ElementRef } from '@angular/core';

declare var CyberMatrixParticles: any;

@Component({
    selector: 'app-cyber-background',
    template: `
        <div class="cyber-container">
            <ng-content></ng-content>
        </div>
    `,
    styles: [`
        .cyber-container {
            position: relative;
            min-height: 100vh;
        }
        :ng-deep .cyber-container > * {
            position: relative;
            z-index: 10;
        }
    `]
})
export class CyberBackgroundComponent implements OnInit, OnDestroy {
    @Input() config: any = {};
    private particles: any;

    constructor(private elementRef: ElementRef) {}

    ngOnInit() {
        this.particles = new CyberMatrixParticles({
            target: this.elementRef.nativeElement.querySelector('.cyber-container'),
            ...this.config
        });
    }

    ngOnDestroy() {
        if (this.particles) {
            this.particles.destroy();
        }
    }
}
```

## Theme Examples

### Hacker Terminal Theme
```javascript
const hackerTheme = new CyberMatrixParticles({
    particleColor: '#00ff00',
    particleHoverColor: '#ffffff',
    matrixColor: '#00ff00',
    backgroundGradient: 'linear-gradient(135deg, #000000 0%, #001100 100%)',
    particleChars: ['0', '1', '>', '<', '|', '+', '-', '*'],
    matrixChars: ['0', '1', '>', '<', '|', '+', '-', '*', '/', '\\'],
    gridColor: '#00ff00',
    showGrid: true,
    showMatrixRain: true,
    matrixSpeed: 2
});
```

### Neon City Theme
```javascript
const neonTheme = new CyberMatrixParticles({
    particleColor: '#ff0080',
    particleHoverColor: '#00ffff',
    matrixColor: '#ff0080',
    backgroundGradient: 'linear-gradient(135deg, #0a0a0a 0%, #2e1a2e 25%, #3e164e 50%, #460f60 75%, #2f0a3f 100%)',
    connectionColors: ['#ff0080', '#00ffff', '#ff0080'],
    dataPacketColor: '#ffff00',
    dataPacketChance: 0.03,
    particleDistance: 70,
    showGrid: true,
    gridColor: '#ff0080'
});
```

### Corporate Security Theme
```javascript
const corporateTheme = new CyberMatrixParticles({
    particleColor: '#0099cc',
    particleHoverColor: '#ff6b6b',
    matrixColor: '#0099cc',
    backgroundGradient: 'linear-gradient(135deg, #0a192f 0%, #16213e 25%, #1a1a2e 50%, #0a0a0a 100%)',
    connectionColors: ['#0099cc', '#00ff41', '#0099cc'],
    showMatrixRain: false,
    showGrid: true,
    gridSize: 100,
    particleDistance: 80
});
```

## Interactive Examples

### Dynamic Color Changing
```javascript
const particles = new CyberMatrixParticles();

// Change colors based on time
setInterval(() => {
    const hour = new Date().getHours();
    let color = '#00ff41';
    
    if (hour >= 6 && hour < 12) color = '#ffff00';      // Morning - Yellow
    else if (hour >= 12 && hour < 18) color = '#ff6b6b'; // Afternoon - Red
    else if (hour >= 18 && hour < 24) color = '#0099cc'; // Evening - Blue
    else color = '#00ff41';                               // Night - Green
    
    particles.updateConfig({
        particleColor: color,
        matrixColor: color
    });
}, 60000); // Update every minute
```

### Mouse-Based Intensity
```javascript
const particles = new CyberMatrixParticles({
    mouseRadius: 150
});

let intensity = 1;
document.addEventListener('mousemove', (e) => {
    // Calculate intensity based on mouse speed
    const speed = Math.sqrt(e.movementX ** 2 + e.movementY ** 2);
    intensity = Math.min(speed / 10, 3);
    
    particles.updateConfig({
        matrixSpeed: 1 + intensity,
        dataPacketChance: 0.01 + (intensity * 0.02)
    });
});
```

### Scroll-Based Effects
```javascript
const particles = new CyberMatrixParticles();

window.addEventListener('scroll', () => {
    const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    
    particles.updateConfig({
        particleDistance: 60 + (scrollPercent * 40),
        animationSpeed: 0.01 + (scrollPercent * 0.02)
    });
});
```

### Audio-Reactive (with Web Audio API)
```javascript
const particles = new CyberMatrixParticles();

// Setup audio context (requires user interaction first)
let audioContext, analyser, dataArray;

function setupAudio() {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    dataArray = new Uint8Array(analyser.frequencyBinCount);
    
    // Connect to audio source (microphone, audio element, etc.)
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            const source = audioContext.createMediaStreamSource(stream);
            source.connect(analyser);
            updateWithAudio();
        });
}

function updateWithAudio() {
    analyser.getByteFrequencyData(dataArray);
    const average = dataArray.reduce((a, b) => a + b) / dataArray.length;
    const intensity = average / 255;
    
    particles.updateConfig({
        matrixSpeed: 1 + intensity * 3,
        dataPacketChance: 0.01 + intensity * 0.05,
        pulseIntensity: 0.3 + intensity * 0.5
    });
    
    requestAnimationFrame(updateWithAudio);
}

// Call setupAudio() after user interaction
document.addEventListener('click', setupAudio, { once: true });
```

## Performance Optimization Examples

### Mobile-Optimized Configuration
```javascript
const isMobile = window.innerWidth <= 768;

const mobileConfig = new CyberMatrixParticles({
    particleDistance: isMobile ? 80 : 60,
    showMatrixRain: !isMobile,
    showGrid: !isMobile,
    matrixSpeed: isMobile ? 1 : 2,
    dataPacketChance: isMobile ? 0.005 : 0.02
});
```

### Performance Monitoring
```javascript
const particles = new CyberMatrixParticles();

// Monitor FPS and adjust quality
let fps = 60;
let lastTime = performance.now();

function checkPerformance() {
    const now = performance.now();
    fps = 1000 / (now - lastTime);
    lastTime = now;
    
    if (fps < 30) {
        // Reduce quality
        particles.updateConfig({
            particleDistance: 80,
            showMatrixRain: false,
            showGrid: false
        });
    } else if (fps > 50) {
        // Increase quality
        particles.updateConfig({
            particleDistance: 60,
            showMatrixRain: true,
            showGrid: true
        });
    }
    
    setTimeout(checkPerformance, 1000);
}

checkPerformance();
```

### Lazy Loading
```javascript
// Only load when element is in viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.particles) {
            entry.target.particles = new CyberMatrixParticles({
                target: entry.target
            });
        } else if (!entry.isIntersecting && entry.target.particles) {
            entry.target.particles.destroy();
            entry.target.particles = null;
        }
    });
});

document.querySelectorAll('.cyber-section').forEach(section => {
    observer.observe(section);
});
```

## Error Handling Examples

### Graceful Fallback
```javascript
try {
    const particles = new CyberMatrixParticles();
} catch (error) {
    console.warn('CyberMatrix Particles failed to initialize:', error);
    // Fallback to CSS animation or static background
    document.body.classList.add('cyber-fallback');
}
```

### Feature Detection
```javascript
function canUseCyberParticles() {
    // Check for required features
    return !!(
        window.requestAnimationFrame &&
        document.createElement('canvas').getContext &&
        !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
}

if (canUseCyberParticles()) {
    new CyberMatrixParticles();
} else {
    // Use alternative background
    document.body.style.background = 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)';
}
```
