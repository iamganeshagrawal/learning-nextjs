import moment from 'moment';

export default (req, res) => {
    res.json({
        currentTime : moment().format()
    })
}