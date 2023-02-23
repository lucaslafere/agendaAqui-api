import dotenv from "dotenv";
import app from "./app";
dotenv.config();

//teste numero dois
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
