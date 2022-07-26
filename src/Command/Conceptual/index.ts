interface Command {
    execute(): void
}

// invoker
class Switch {
    private onCommand: Command;
    private offCommand: Command;

    constructor(onCommand: Command, offCommand: Command) {
        this.onCommand = onCommand;
        this.offCommand = offCommand;
    }

    on() {
        this.onCommand.execute();
    }

    off() {
        this.offCommand.execute();
    }
}

interface ILamp {
    on(): void
    off(): void
}

// receiver
class Lamp implements ILamp {
    on() {
        console.log('switch on');
    }

    off() {
        console.log('switch off');
    }
}

// command
class SwitchOnCommand implements Command {
    private lamp: ILamp;
    
    constructor(lamp: ILamp) {
        this.lamp = lamp;
    }

    execute() {
        this.lamp.on();
    }
}

class SwitchOffCommand implements Command {
    private lamp: ILamp;
    
    constructor(lamp: ILamp) {
        this.lamp = lamp;
    }

    execute() {
        this.lamp.off();
    }
}

// client
const lamp = new Lamp();

const switchOnLamp = new SwitchOnCommand(lamp);
const swithcOffLamp = new SwitchOffCommand(lamp);

const lampSwitch = new Switch(switchOnLamp, swithcOffLamp);

lampSwitch.on();
lampSwitch.off();