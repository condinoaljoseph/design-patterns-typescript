interface IShape {
    draw: () => void
}

class Circle implements IShape {
    public draw() {
        console.log('drawing circle');
    }
}

class Square implements IShape {
    public draw() {
        console.log('drawing square');
    }
}

interface IRenderer {
    render: () => void
}

// act as bridge between IShape and the concrete rendering implementation
abstract class Renderer implements IRenderer {
    private shape: IShape;

    constructor(shape: IShape) {
        this.shape = shape
    }

    public render() {
        this.shape.draw();
    }
}

class SVGRenderer extends Renderer {
    render() {
        super.render();
        console.log('rendering using SVG')
    }
}

class CanvasRenderer extends Renderer {
    render() {
        super.render()
        console.log('rendering using canvas')
    }
}

const svg = new SVGRenderer(new Square)
const canvas = new CanvasRenderer(new Square)

console.log(svg.render())
console.log(canvas.render())