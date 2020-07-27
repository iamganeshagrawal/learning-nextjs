export default (req, res) => {
    res.status(404).json({
        error: "You lost here... 💩",
        status: 404
    })
}