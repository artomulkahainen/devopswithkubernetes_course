import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const fetchWiki = async () => {
  try {
    const url = (
      await axios.get("https://en.wikipedia.org/wiki/Special:Random")
    ).request.res.responseUrl;

    await axios.post(
      `http://${process.env.BACKEND_HOST}:${process.env.BACKEND_PORT}/api/todos`,
      { todo: `Read: ${url}` }
    );

    console.log("succesfully sent todo");
  } catch (e) {
    console.error(e);
  }
};

await fetchWiki();
