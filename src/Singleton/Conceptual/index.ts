class Database {
    private static instance: Database;
    private connected = false;
  
    private constructor() {}
  
    public static getInstance(): Database {
      if (!Database.instance) {
        Database.instance = new Database();
      }
      return Database.instance;
    }
  
    public static connect(): string {
      const instance = Database.getInstance();
      instance.connected = true;
      return 'Database connected';
    }
  
    public static isConnected(): boolean {
      const instance = Database.getInstance();
      return instance.connected;
    }
}
  
const db1 = Database.getInstance();
const db2 = Database.getInstance();

if (db1 === db2) {
    console.log('Working: Both databases have the same instance');
} else {
    console.log('Failing: Databases have different instances');
}

console.log(Database.connect());

if (Database.isConnected()) {
    console.log('Database is connected');
} else {
    console.log('Database is not connected');
}