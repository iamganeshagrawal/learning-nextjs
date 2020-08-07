import axios from "axios";
const {DB_SERVER, DB_USERNAME, DB_PASSWORD} = process.env;

export default async (req, res) => {
    axios
        .post(DB_SERVER, {
            operation: "sql",
            sql: "select _id, title, url from linksDB.links ORDER BY pos ASC"
        },
        {
            auth: {
                username: DB_USERNAME,
                password: DB_PASSWORD
            }
        })
        .then(result => res.send(result.data))
        .catch(err => res.send(err))

}