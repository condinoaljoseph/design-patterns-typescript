class CPU {
    freeze() {
        console.log('Freeze')
    }

    jump() {
        console.log('Jump')
    }

    execute() {
        console.log('Execute')
    }
}

class HardDrive {
    read() {
        console.log('Read')
    }
}

class Memory {
    load() {
        console.log('Load')
    }
}

class ComputerFacade {
    private cpu = new CPU();
    private memory = new Memory();
    private hardDrive = new HardDrive();

    start() {
        this.cpu.freeze();
        this.hardDrive.read();
        this.memory.load();
        this.cpu.jump();
        this.cpu.execute();
    }
}

const computer = new ComputerFacade();
computer.start();