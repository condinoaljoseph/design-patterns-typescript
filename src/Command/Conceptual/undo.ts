class CommandManager {
    private stack: ICommand[] = [];

    setCommand(command: ICommand) {
        command.execute();
        this.stack.push(command);
    }

    undo() {
        if(this.stack.length > 0) {
            const command = this.stack.pop();
            command?.undo();
        }
    }

    getStack() {
        return this.stack;
    }
}

interface IEditor {
    bold(): void
    italic(): void
    underline(): void
    getText(): string
    setText(text: string): void
}

class Editor implements IEditor {
    private text: string;

    constructor(text: string) {
        this.text = text;
    }

    bold() {
        this.text = `<b>${this.text}</b>`;
    }

    italic() {
        this.text = `<i>${this.text}</i>`;
    }

    underline() {
        this.text = `<u>${this.text}</u>`;
    }

    getText() {
        return this.text;
    }

    setText(text: string) {
        this.text = text;
    }
}

interface ICommand {
    execute(): void
    undo(): void
}

class BoldCommand implements ICommand {
    private editor: IEditor;
    private prevText: string;

    constructor(editor: IEditor) {
        this.editor = editor
        this.prevText = this.editor.getText();
    }

    execute() {
        this.editor.bold();
    }

    undo() {
        this.editor.setText(this.prevText)
    }
}

class ItalicCommand implements ICommand {
    private editor: IEditor;
    private prevText: string;

    constructor(editor: IEditor) {
        this.editor = editor
        this.prevText = this.editor.getText();
    }

    execute() {
        this.editor.italic();
    }

    undo() {
        this.editor.setText(this.prevText)
    }
}

class UnderlineCommand implements ICommand {
    private editor: IEditor;
    private prevText: string;

    constructor(editor: IEditor) {
        this.editor = editor
        this.prevText = this.editor.getText();
    }

    execute() {
        this.editor.underline();
    }

    undo() {
        this.editor.setText(this.prevText)
    }
}

const editor = new Editor('content');

const bold = new BoldCommand(editor);
const italic = new ItalicCommand(editor);
const underline = new UnderlineCommand(editor);

const commandManager = new CommandManager();

commandManager.setCommand(bold);
commandManager.setCommand(italic);
console.log(commandManager.getStack());
commandManager.undo();
console.log(commandManager.getStack());
console.log(editor.getText())
