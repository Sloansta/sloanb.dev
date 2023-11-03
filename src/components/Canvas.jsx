import { useRef, useEffect } from 'react';

const Canvas = props => {
    const canvasRef = useRef(null);

    class Circle {
        constructor(x, y, radius, vx, vy, color) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.vx = vx;
            this.vy = vy;
            this.color = color; // Color of the circle
        }

        draw(ctx) {
            ctx.beginPath();
            ctx.fillStyle = this.color; // Use the circle's color
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.fill();
        }

        update(canvasWidth, canvasHeight) {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x + this.radius > canvasWidth || this.x - this.radius < 0) {
                this.vx *= -1;
            }
            if (this.y + this.radius > canvasHeight || this.y - this.radius < 0) {
                this.vy *= -1;
            }
        }
    }

    // Function to generate a random color
    const getRandomColor = () => {
        const colors = ['#FFA07A', '#FF7F50', '#FF6347', '#FF4500', '#FFD700', '#FFFF00', '#ADFF2F'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    const createCircles = (count, canvasWidth, canvasHeight) => {
        let circles = [];
        for (let i = 0; i < count; i++) {
            let radius = Math.random() * 45 + 10; 
            let x = Math.random() * (canvasWidth - radius * 2) + radius;
            let y = Math.random() * (canvasHeight - radius * 2) + radius;
            let vx = (Math.random() - 0.5) * 1.5; 
            let vy = (Math.random() - 0.5) * 1.5;
            let color = getRandomColor(); 
            circles.push(new Circle(x, y, radius, vx, vy, color));
        }
        return circles;
    };

    const draw = (ctx, circles) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        circles.forEach(circle => {
            circle.draw(ctx);
            circle.update(ctx.canvas.width, ctx.canvas.height);
        });
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        const context = canvas.getContext('2d');
        let animationFrameId;
        const circles = createCircles(10, canvas.width, canvas.height); 

        const render = () => {
            draw(context, circles);
            animationFrameId = window.requestAnimationFrame(render);
        };

        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
