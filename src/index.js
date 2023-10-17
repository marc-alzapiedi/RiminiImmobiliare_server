import app from "./server.js"
import cors from "cors"


const port = process.env.PORT || 4000
app.use(cors())

app.listen(port, () => {
    console.log(`\n Server is running on port ${port}\n`)
  })
  