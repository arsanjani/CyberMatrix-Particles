/**
 * CyberMatrix Particles Background Effect
 * A cyberpunk-style animated background with matrix rain, interactive particles, and network connections
 * 
 * @author CyberMatrix Particles
 * @version 1.0.0
 * @license MIT
 */

class CyberMatrixParticles {
    constructor(options = {}) {
        // Default configuration
        this.config = {
            // Canvas settings
            target: options.target || document.body,
            zIndex: options.zIndex || -1,
            
            // Background gradient
            backgroundGradient: options.backgroundGradient || 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #0a192f 100%)',
            
            // Particle settings
            particleDistance: options.particleDistance || 60,
            particleSpeed: options.particleSpeed || 1.5,
            particleChars: options.particleChars || ['0', '1', 'A', 'B', 'C', 'D', 'E', 'F', '2', '3', '4', '5', '6', '7', '8', '9'],
            particleFont: options.particleFont || '14px "Courier New", monospace',
            particleColor: options.particleColor || '#00ff41',
            particleHoverColor: options.particleHoverColor || '#ff6b6b',
            
            // Mouse interaction
            mouseRadius: options.mouseRadius || 120,
            mouseRepulsion: options.mouseRepulsion || 15,
            
            // Network connections
            showConnections: options.showConnections !== false,
            connectionColors: options.connectionColors || ['#00ff41', '#0099cc', '#00ff41'],
            connectionOpacity: options.connectionOpacity || 0.6,
            dataPacketChance: options.dataPacketChance || 0.02,
            dataPacketColor: options.dataPacketColor || '#ff6b6b',
            
            // Matrix rain
            showMatrixRain: options.showMatrixRain !== false,
            matrixChars: options.matrixChars || ['0', '1', 'ア', 'カ', 'サ', 'タ', 'ナ', 'ハ', 'マ', 'ヤ', 'ラ', 'ワ', 'A', 'B', 'C', 'D', 'E', 'F'],
            matrixSpeed: options.matrixSpeed || 2,
            matrixFont: options.matrixFont || '12px "Courier New", monospace',
            matrixColor: options.matrixColor || '#00ff41',
            matrixHeadColor: options.matrixHeadColor || 'rgba(255, 255, 255, 0.9)',
            matrixDropLength: options.matrixDropLength || 15,
            
            // Grid
            showGrid: options.showGrid !== false,
            gridSize: options.gridSize || 50,
            gridColor: options.gridColor || '#00ff41',
            gridOpacity: options.gridOpacity || 0.1,
            
            // Animation
            animationSpeed: options.animationSpeed || 0.01,
            pulseIntensity: options.pulseIntensity || 0.3,
            
            // Auto-initialize
            autoInit: options.autoInit !== false
        };

        this.canvas = null;
        this.ctx = null;
        this.w = 0;
        this.h = 0;
        this.particles = [];
        this.matrixDrops = [];
        this.mouse = {
            x: undefined,
            y: undefined,
            radius: this.config.mouseRadius
        };
        this.time = 0;
        this.animationId = null;
        
        if (this.config.autoInit) {
            this.init();
        }
    }

    init() {
        this.createCanvas();
        this.resizeReset();
        this.addEventListeners();
        this.animationLoop();
        return this;
    }

    createCanvas() {
        // Create canvas element
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'cyber-matrix-canvas';
        this.canvas.style.position = 'fixed';
        this.canvas.style.left = '0';
        this.canvas.style.top = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = this.config.zIndex;
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.background = this.config.backgroundGradient;
        
        // Insert canvas as first child of target
        this.config.target.insertBefore(this.canvas, this.config.target.firstChild);
        
        this.ctx = this.canvas.getContext('2d');
    }

    resizeReset() {
        this.w = this.canvas.width = window.innerWidth;
        this.h = this.canvas.height = window.innerHeight;

        // Initialize cyber particles
        this.particles = [];
        for (let y = (((this.h - this.config.particleDistance) % this.config.particleDistance) + this.config.particleDistance) / 2; 
             y < this.h; 
             y += this.config.particleDistance) {
            for (let x = (((this.w - this.config.particleDistance) % this.config.particleDistance) + this.config.particleDistance) / 2; 
                 x < this.w; 
                 x += this.config.particleDistance) {
                this.particles.push(new CyberParticle(x, y, this.config));
            }
        }

        // Initialize matrix drops
        if (this.config.showMatrixRain) {
            this.matrixDrops = [];
            const columns = Math.floor(this.w / 20);
            for (let i = 0; i < columns; i++) {
                this.matrixDrops.push(new MatrixDrop(i * 20, Math.random() * this.h, this.config));
            }
        }
    }

    addEventListeners() {
        window.addEventListener('resize', () => this.resizeReset());
        
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });

        window.addEventListener('mouseout', () => {
            this.mouse.x = undefined;
            this.mouse.y = undefined;
        });
    }

    animationLoop() {
        this.ctx.clearRect(0, 0, this.w, this.h);
        this.time += this.config.animationSpeed;
        
        if (this.config.showGrid) {
            this.drawGrid();
        }
        
        if (this.config.showMatrixRain) {
            this.drawMatrixDrops();
        }
        
        this.drawScene();
        
        this.animationId = requestAnimationFrame(() => this.animationLoop());
    }

    drawGrid() {
        this.ctx.save();
        this.ctx.globalAlpha = this.config.gridOpacity;
        this.ctx.strokeStyle = this.config.gridColor;
        this.ctx.lineWidth = 0.5;
        
        // Draw vertical lines
        for (let x = 0; x < this.w; x += this.config.gridSize) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.h);
            this.ctx.stroke();
        }
        
        // Draw horizontal lines
        for (let y = 0; y < this.h; y += this.config.gridSize) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.w, y);
            this.ctx.stroke();
        }
        this.ctx.restore();
    }

    drawMatrixDrops() {
        for (let i = 0; i < this.matrixDrops.length; i++) {
            this.matrixDrops[i].update(this.h);
            this.matrixDrops[i].draw(this.ctx);
        }
    }

    drawScene() {
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].update(this.mouse, this.time);
            this.particles[i].draw(this.ctx);
        }
        
        if (this.config.showConnections) {
            this.drawNetworkConnections();
        }
    }

    drawNetworkConnections() {
        for (let a = 0; a < this.particles.length; a++) {
            for (let b = a; b < this.particles.length; b++) {
                const distance = Math.sqrt(
                    Math.pow(this.particles[a].x - this.particles[b].x, 2) +
                    Math.pow(this.particles[a].y - this.particles[b].y, 2)
                );

                if (distance <= this.config.particleDistance) {
                    this.ctx.save();
                    const alpha = (1 - distance / this.config.particleDistance) * this.config.connectionOpacity;
                    this.ctx.globalAlpha = alpha;
                    
                    // Create cyber security themed connection
                    const gradient = this.ctx.createLinearGradient(
                        this.particles[a].x, this.particles[a].y,
                        this.particles[b].x, this.particles[b].y
                    );
                    gradient.addColorStop(0, this.config.connectionColors[0]);
                    gradient.addColorStop(0.5, this.config.connectionColors[1]);
                    gradient.addColorStop(1, this.config.connectionColors[2]);
                    
                    this.ctx.strokeStyle = gradient;
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[a].x, this.particles[a].y);
                    this.ctx.lineTo(this.particles[b].x, this.particles[b].y);
                    this.ctx.stroke();
                    
                    // Add data packet effect
                    if (Math.random() > (1 - this.config.dataPacketChance)) {
                        const midX = (this.particles[a].x + this.particles[b].x) / 2;
                        const midY = (this.particles[a].y + this.particles[b].y) / 2;
                        this.ctx.fillStyle = this.config.dataPacketColor;
                        this.ctx.fillRect(midX - 1, midY - 1, 2, 2);
                    }
                    
                    this.ctx.restore();
                }
            }
        }
    }

    // Public methods for controlling the animation
    start() {
        if (!this.animationId) {
            this.animationLoop();
        }
        return this;
    }

    stop() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
        return this;
    }

    destroy() {
        this.stop();
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
        return this;
    }

    updateConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
        this.mouse.radius = this.config.mouseRadius;
        this.resizeReset();
        return this;
    }
}

class CyberParticle {
    constructor(x, y, config) {
        this.x = x;
        this.y = y;
        this.defaultX = x;
        this.defaultY = y;
        this.char = config.particleChars[Math.floor(Math.random() * config.particleChars.length)];
        this.config = config;
        this.speed = config.particleSpeed;
        this.glowIntensity = Math.random() * 0.5 + 0.5;
        this.charChangeTimer = 0;
        this.isHovered = false;
    }

    update(mouse, time) {
        // Change character occasionally for dynamic effect
        this.charChangeTimer++;
        if (this.charChangeTimer > 120) {
            this.char = this.config.particleChars[Math.floor(Math.random() * this.config.particleChars.length)];
            this.charChangeTimer = 0;
        }

        this.isHovered = false;
        if (mouse.x !== undefined && mouse.y !== undefined) {
            const distance = Math.sqrt(
                Math.pow(mouse.x - this.x, 2) + Math.pow(mouse.y - this.y, 2)
            );

            if (distance < mouse.radius) {
                this.isHovered = true;
                
                // Mouse repulsion effect
                if (this.x < mouse.x && this.x < this.defaultX + this.config.mouseRepulsion) {
                    this.x -= this.speed;
                }
                if (this.x > mouse.x && this.x > this.defaultX - this.config.mouseRepulsion) {
                    this.x += this.speed;
                }
                if (this.y < mouse.y && this.y < this.defaultY + this.config.mouseRepulsion) {
                    this.y -= this.speed;
                }
                if (this.y > mouse.y && this.y > this.defaultY - this.config.mouseRepulsion) {
                    this.y += this.speed;
                }
                
                // Change character more frequently when hovered
                if (Math.random() > 0.95) {
                    this.char = this.config.particleChars[Math.floor(Math.random() * this.config.particleChars.length)];
                }
            }
        }

        // Return to default position
        if (this.x !== this.defaultX) {
            const dx = this.x - this.defaultX;
            this.x -= dx / 12;
        }
        if (this.y !== this.defaultY) {
            const dy = this.y - this.defaultY;
            this.y -= dy / 12;
        }

        // Pulse effect
        this.glowIntensity = 0.5 + Math.sin(time * 2 + this.defaultX * 0.01) * this.config.pulseIntensity;
    }

    draw(ctx) {
        ctx.save();
        
        // Text properties
        ctx.font = this.config.particleFont;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Glow effect
        if (this.isHovered) {
            ctx.shadowColor = this.config.particleHoverColor;
            ctx.shadowBlur = 15;
            ctx.fillStyle = this.config.particleHoverColor;
        } else {
            ctx.shadowColor = this.config.particleColor;
            ctx.shadowBlur = 10 * this.glowIntensity;
            const alpha = 0.8 * this.glowIntensity;
            const rgb = this.hexToRgb(this.config.particleColor);
            ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
        }
        
        // Draw character
        ctx.fillText(this.char, this.x, this.y);
        
        ctx.restore();
    }

    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : { r: 0, g: 255, b: 65 };
    }
}

class MatrixDrop {
    constructor(x, y, config) {
        this.x = x;
        this.y = y;
        this.config = config;
        this.speed = Math.random() * this.config.matrixSpeed + 1;
        this.chars = [];
        this.length = Math.floor(Math.random() * this.config.matrixDropLength) + 10;
        
        // Generate random characters for the drop
        for (let i = 0; i < this.length; i++) {
            this.chars.push(this.config.matrixChars[Math.floor(Math.random() * this.config.matrixChars.length)]);
        }
    }

    update(canvasHeight) {
        this.y += this.speed;
        
        // Reset when it goes off screen
        if (this.y > canvasHeight + this.length * 15) {
            this.y = -this.length * 15;
            this.speed = Math.random() * this.config.matrixSpeed + 1;
            
            // Occasionally change characters
            if (Math.random() > 0.98) {
                for (let i = 0; i < this.chars.length; i++) {
                    if (Math.random() > 0.7) {
                        this.chars[i] = this.config.matrixChars[Math.floor(Math.random() * this.config.matrixChars.length)];
                    }
                }
            }
        }
    }

    draw(ctx) {
        ctx.save();
        ctx.font = this.config.matrixFont;
        ctx.textAlign = 'center';
        
        for (let i = 0; i < this.chars.length; i++) {
            const charY = this.y - i * 15;
            const alpha = 1 - (i / this.chars.length);
            
            // Head of the drop is brighter
            if (i === 0) {
                ctx.fillStyle = this.config.matrixHeadColor;
                ctx.shadowColor = this.config.matrixColor;
                ctx.shadowBlur = 5;
            } else {
                const rgb = this.hexToRgb(this.config.matrixColor);
                ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha * 0.6})`;
                ctx.shadowBlur = 0;
            }
            
            ctx.fillText(this.chars[i], this.x, charY);
        }
        
        ctx.restore();
    }

    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : { r: 0, g: 255, b: 65 };
    }
}

// Export for different module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CyberMatrixParticles;
} else if (typeof define === 'function' && define.amd) {
    define([], function() { return CyberMatrixParticles; });
} else {
    window.CyberMatrixParticles = CyberMatrixParticles;
}
