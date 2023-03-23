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
    protected shape: IShape;

    constructor(shape: IShape) {
        this.shape = shape
    }

    public abstract render(): void;
}

// allows the rendering tehcnology to vary independently of the shape being rendered
// concrete implemenation
class SVGRenderer extends Renderer {
    render() {
        this.shape.draw()
        console.log('rendering using SVG')
    }
}

// concreate implementation
class CanvasRenderer extends Renderer {
    render() {
        this.shape.draw()
        console.log('rendering using canvas')
    }
}

const svg = new SVGRenderer(new Square)
const canvas = new CanvasRenderer(new Square)

console.log(svg.render())
console.log(canvas.render())