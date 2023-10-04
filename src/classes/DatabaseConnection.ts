export class DatabaseConnection {
  private static instance: DatabaseConnection;

  // Making the constructor private ensures that no instance can be made from outside
  private constructor() {
    console.log("Database connected...");
  }

  // The method to get the instance of the database connection
  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  // Just a method to simulate query execution
  public query(sql: string): void {
    console.log(`Executing query: ${sql}`);
  }
}
