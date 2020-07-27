export default (req, res) => {
    const SERVER = process.env.DB_SERVER;
    res.status(404).json({
        error: "You lost here... 💩",
        status: 404,
        SERVER
    })
}