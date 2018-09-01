import * as mongoose from "mongoose"

class Database {
  constructor() {
    this.connectDB()
  }

  private async connectDB(): Promise<void> {
    try {
      const DB_URL = process.env.DB_URL

      await mongoose.connect(
        DB_URL,
        {
          useNewUrlParser: true,
        },
      )
      console.log("Database connected")
    } catch (error) {
      console.error(`Database connection error: ${error}`)
    }
  }
}

export default Database
