interface IDocument {
    createHtmlElement(el: string): HtmlElement
}

class DOM implements IDocument {
     createHtmlElement(el: string) {
        if (el === 'button') {
            return new Button();
        }
        if (el === 'div') {
            return new Div();
        }

        return new HtmlUnknownElement();
    }
}

interface HtmlElement {
    render(): string;
}

class Button implements HtmlElement {
    render() {
        return 'Button';
    }
}

class Div implements HtmlElement {
    render() {
        return 'Div';
    }
}

class HtmlUnknownElement implements HtmlElement {
    render() {
        return 'Unknown'
    }
}

const dom = new DOM();
const div = dom.createHtmlElement('div');
const button = dom.createHtmlElement('button');
const unknown = dom.createHtmlElement('section');

console.log(div.render());
console.log(button.render());
console.log(unknown.render());