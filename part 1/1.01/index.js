import { v4 as uuidv4 } from "uuid";

const randomUuid = uuidv4();

const generateUuid = () => {
  console.log(`${new Date()}:`, randomUuid);

  setTimeout(() => {
    generateUuid();
  }, 5000);
};

generateUuid();
