interface UIControlFactory {
    createButton(): IButton
    createCheckbox(): ICheckbox
}

class WinFactory implements UIControlFactory {
    createButton() {
        return new WinButton()
    }
    createCheckbox() {
        return new WinCheckbox()
    }
}

class MacFactory implements UIControlFactory {
    createButton() {
        return new MacButton()
    }
    createCheckbox() {
        return new MacCheckbox()
    }
}

interface IButton {
    draw(): string
}

class WinButton implements IButton {
    draw() {
        return 'Windows Button'
    }
}

class MacButton implements IButton {
    draw() {
        return 'Macintosh Button'
    }
}

interface ICheckbox {
    draw(): string
}

class WinCheckbox implements ICheckbox {
    draw() {
        return 'Windows Checkbox'
    }
}

class MacCheckbox implements ICheckbox {
    draw() {
        return 'Macintosh Checkbox'
    }
}

class App {
    private factory: UIControlFactory;
    private button!: IButton
    private checkbox!: ICheckbox

    constructor(factory: UIControlFactory) {
        this.factory = factory;
        this.createUI();
    }

    createUI() {
        this.button = this.factory.createButton();
        this.checkbox = this.factory.createCheckbox();
    }

    getUIControls() {
        return {
            button: this.button.draw(),
            checkbox: this.checkbox.draw()
        }
    }
}

const app = new App(new WinFactory());

console.log(JSON.stringify(app.getUIControls()))