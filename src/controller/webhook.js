let verify_token = 'jageshfartiyal'

const webhook = async (req, res) => {
    console.log("This is inside the webhook")
    const mode = req.query["hub.mode"];
    const challenge = req.query["hub.challenge"];
    const token = req.query["hub.verify_token"];

    console.log("The token is ",token, challenge)

    const mytoken = 'jageshfartiyal'; // Replace with your actual verify token

    if (mode === 'subscribe' && token === mytoken) {
        res.status(200).send(challenge);
    } else {
        res.status(403).send('Verification failed');
    }
};


module.exports = {
    webhook
}