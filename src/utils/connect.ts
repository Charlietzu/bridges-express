import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

async function connect() {
    const dbUri: string = config.get<string>("dbUri");
    try {
        await mongoose.connect(dbUri);
        logger.info("Connected to MongoDB");
    } catch (err) {
        logger.error(`Could not connect to MongoDB, error: ${err}`);
        process.exit(1);
    }
}

export default connect;