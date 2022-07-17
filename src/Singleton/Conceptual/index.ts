class Database {
    private static instance: Database;
    private constructor() {}

    public static getInstance() {
        if(!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }

    connect() {
        return 'Database connected';
    }
}

const db1 = Database.getInstance();
const db2 = Database.getInstance();

if (db1 === db2) {
    console.log('Working: Both databases has the same instance')
} else {
    console.log('Failing: Databases has different instance');
}

console.log(db1.connect());