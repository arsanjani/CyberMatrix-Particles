# CyberMatrix Particles

A stunning cyberpunk-style animated background effect featuring matrix rain, interactive particles, and network visualizations. Perfect for gaming websites, tech portfolios, or any project that needs a futuristic aesthetic.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Available-brightgreen)](https://arsanjani.github.io/CyberMatrix-Particles/)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🌧️ **Matrix Rain**: Authentic matrix-style falling characters
- 🎯 **Interactive Particles**: Mouse-responsive hexadecimal particles
- 🌐 **Network Connections**: Dynamic network visualization with data packets
- ⚙️ **Fully Configurable**: Customize colors, speeds, and all visual effects
- 📱 **Responsive Design**: Optimized for all screen sizes
- 🎨 **CSS Integration**: Themed CSS classes for seamless integration
- 🚀 **Performance Optimized**: Efficient canvas rendering
- ♿ **Accessibility**: Supports reduced motion preferences

## 🚀 Quick Start

### Basic Usage

1. Include the files in your project:
```html
<link rel="stylesheet" href="cyber-matrix-particles.css">
<script src="cyber-matrix-particles.js"></script>
```

2. Add the CSS class to your body:
```html
<body class="cyber-matrix-enabled">
```

3. Initialize the effect:
```javascript
// Basic initialization
const particles = new CyberMatrixParticles();

// Or with custom options
const particles = new CyberMatrixParticles({
    particleColor: '#ff6b6b',
    particleDistance: 80,
    showMatrixRain: true
});
```

## 📋 Installation

### Option 1: Direct Download
1. Download all files from this repository
2. Include the CSS and JS files in your project
3. Follow the Quick Start guide above

### Option 2: CDN (if available)
```html
<link rel="stylesheet" href="https://cdn.example.com/cyber-matrix-particles/cyber-matrix-particles.css">
<script src="https://cdn.example.com/cyber-matrix-particles/cyber-matrix-particles.js"></script>
```

### Option 3: NPM (if published)
```bash
npm install cyber-matrix-particles
```

## ⚙️ Configuration Options

The `CyberMatrixParticles` constructor accepts an options object with the following properties:

### Canvas & Target Options
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `target` | HTMLElement | `document.body` | Target element to append canvas to |
| `zIndex` | Number | `-1` | Z-index of the canvas |
| `autoInit` | Boolean | `true` | Automatically initialize on creation |

### Background Options
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `backgroundGradient` | String | See default gradient | CSS gradient for canvas background |

### Particle Options
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `particleDistance` | Number | `60` | Distance between particles |
| `particleSpeed` | Number | `1.5` | Movement speed of particles |
| `particleChars` | Array | `['0','1','A','B'...]` | Characters to display |
| `particleFont` | String | `'14px "Courier New"'` | Font for particles |
| `particleColor` | String | `'#00ff41'` | Default particle color |
| `particleHoverColor` | String | `'#ff6b6b'` | Color when mouse hovers |

### Mouse Interaction
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `mouseRadius` | Number | `120` | Mouse interaction radius |
| `mouseRepulsion` | Number | `15` | Maximum repulsion distance |

### Network Connections
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `showConnections` | Boolean | `true` | Show network connections |
| `connectionColors` | Array | `['#00ff41','#0099cc','#00ff41']` | Connection gradient colors |
| `connectionOpacity` | Number | `0.6` | Maximum connection opacity |
| `dataPacketChance` | Number | `0.02` | Chance of data packet appearance |
| `dataPacketColor` | String | `'#ff6b6b'` | Color of data packets |

### Matrix Rain Options
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `showMatrixRain` | Boolean | `true` | Enable matrix rain effect |
| `matrixChars` | Array | `['0','1','ア','カ'...]` | Characters for matrix rain |
| `matrixSpeed` | Number | `2` | Speed of falling characters |
| `matrixFont` | String | `'12px "Courier New"'` | Font for matrix characters |
| `matrixColor` | String | `'#00ff41'` | Matrix rain color |
| `matrixHeadColor` | String | `'rgba(255,255,255,0.9)'` | Color of drop head |
| `matrixDropLength` | Number | `15` | Maximum length of drops |

### Grid Options
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `showGrid` | Boolean | `true` | Show background grid |
| `gridSize` | Number | `50` | Size of grid cells |
| `gridColor` | String | `'#00ff41'` | Grid line color |
| `gridOpacity` | Number | `0.1` | Grid opacity |

### Animation Options
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `animationSpeed` | Number | `0.01` | Overall animation speed |
| `pulseIntensity` | Number | `0.3` | Intensity of particle pulsing |

## 🎨 CSS Classes

The package includes several CSS classes for easy styling:

### Container Classes
- `.cyber-matrix-enabled` - Applied to body for background
- `.cyber-container` - Basic cyber-themed container
- `.cyber-container.enhanced` - Container with glow effect

### Form Elements
- `.cyber-input` - Cyber-themed input fields
- `.cyber-button` - Cyber-themed buttons

### Text Styles
- `.cyber-text` - Basic cyber text style
- `.cyber-text.heading` - Large heading style
- `.cyber-text.subheading` - Subheading style

### Utility Classes
- `.cyber-above` - Sets z-index: 10
- `.cyber-interactive` - Sets z-index: 100 with pointer events

## 📱 Responsive Design

The effect automatically adapts to different screen sizes:

- **Desktop**: Full feature set with optimal performance
- **Tablet**: Adjusted particle density and effects
- **Mobile**: Optimized for touch devices with reduced complexity

## ♿ Accessibility

The package respects user preferences:

- **Reduced Motion**: Simplified animations when `prefers-reduced-motion` is set
- **High Contrast**: Enhanced visibility in high contrast mode
- **Screen Readers**: Canvas is properly hidden from screen readers

## 🎯 API Methods

### Control Methods
```javascript
const particles = new CyberMatrixParticles();

// Start animation
particles.start();

// Stop animation
particles.stop();

// Update configuration
particles.updateConfig({
    particleColor: '#ff0000',
    showMatrixRain: false
});

// Destroy instance
particles.destroy();
```

## 🎨 Preset Configurations

### Classic Matrix
```javascript
const classic = new CyberMatrixParticles({
    particleColor: '#00ff41',
    particleHoverColor: '#ffffff',
    matrixColor: '#00ff41',
    backgroundGradient: 'linear-gradient(135deg, #000000 0%, #001100 50%, #000000 100%)',
    showMatrixRain: true,
    showGrid: false,
    particleDistance: 60,
    matrixSpeed: 1.5
});
```

### Neon Cyberpunk
```javascript
const neon = new CyberMatrixParticles({
    particleColor: '#ff0080',
    particleHoverColor: '#00ffff',
    matrixColor: '#ff0080',
    backgroundGradient: 'linear-gradient(135deg, #0a0a0a 0%, #2e1a2e 25%, #3e164e 50%, #460f60 75%, #2f0a3f 100%)',
    showMatrixRain: true,
    showGrid: true,
    particleDistance: 70,
    matrixSpeed: 2.5
});
```

### Minimal
```javascript
const minimal = new CyberMatrixParticles({
    particleColor: '#ffffff',
    particleHoverColor: '#cccccc',
    matrixColor: '#666666',
    backgroundGradient: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)',
    showMatrixRain: false,
    showGrid: true,
    particleDistance: 80,
    matrixSpeed: 1
});
```

## 🖥️ Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 11+
- ✅ Edge 79+
- ✅ Opera 47+

## 📦 File Structure

```
CyberMatrix-Particles/
├── cyber-matrix-particles.js    # Main JavaScript file
├── cyber-matrix-particles.css   # Styling and theme classes
├── demo.html                   # Interactive demo page
└── README.md                   # This file
```

## 🎮 Interactive Demo

🌐 **[Live Demo](https://arsanjani.github.io/CyberMatrix-Particles/)** - Experience the effect in action!

The live demo includes interactive controls for:

- Toggling effects on/off
- Adjusting colors and speeds
- Switching between presets
- Real-time configuration changes

You can also open `demo.html` locally in your browser for offline testing.

## 🔧 Advanced Usage

### Multiple Instances
```javascript
// Different effects on different containers
const header = new CyberMatrixParticles({
    target: document.getElementById('header'),
    showMatrixRain: false,
    particleDistance: 100
});

const sidebar = new CyberMatrixParticles({
    target: document.getElementById('sidebar'),
    showGrid: false,
    particleColor: '#ff6b6b'
});
```

### Dynamic Updates
```javascript
const particles = new CyberMatrixParticles();

// Change theme based on time of day
function updateTheme() {
    const hour = new Date().getHours();
    if (hour >= 18 || hour <= 6) {
        particles.updateConfig({
            particleColor: '#4a90e2',
            matrixColor: '#4a90e2'
        });
    }
}
```

### Integration with Frameworks

#### React
```jsx
import { useEffect, useRef } from 'react';

function CyberBackground() {
    const particlesRef = useRef(null);

    useEffect(() => {
        const particles = new CyberMatrixParticles({
            target: document.body
        });
        particlesRef.current = particles;

        return () => particles.destroy();
    }, []);

    return null;
}
```

#### Vue
```vue
<template>
    <div ref="container"></div>
</template>

<script>
export default {
    mounted() {
        this.particles = new CyberMatrixParticles({
            target: this.$refs.container
        });
    },
    beforeUnmount() {
        if (this.particles) {
            this.particles.destroy();
        }
    }
}
</script>
```

## 🐛 Troubleshooting

### Common Issues

**Effect not showing**
- Ensure the canvas has proper z-index
- Check that the target element exists
- Verify CSS classes are applied

**Performance issues**
- Reduce `particleDistance` for fewer particles
- Disable effects you don't need
- Lower `animationSpeed` value

**Mobile performance**
- The effect automatically reduces complexity on mobile
- Consider disabling on very old devices

## 📄 License

MIT License - feel free to use in personal and commercial projects.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## 🔗 Links

- [🌐 Live Demo](https://arsanjani.github.io/CyberMatrix-Particles/) - Interactive online demo
- [📂 Source Code](.) - Browse the repository
- [🐛 Report Issues](../../issues) - Found a bug? Let us know!

## 🎉 Credits

Created with ❤️ for the cyberpunk and web development communities.

---

**Enjoy creating amazing cyberpunk experiences! 🚀**
