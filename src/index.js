const app = require("./app");
const { env } = require("./app/config/env");

app.listen(env.PORT, () => {
  console.log(`Server running on : http://127.0.0.1:${env.PORT}`);
});
