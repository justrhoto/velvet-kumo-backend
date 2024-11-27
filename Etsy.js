const axios = require('axios');

async function pingEtsy() {
    try{
        const response = await axios.get('https://api.etsy.com/v3/application/openapi-ping', {
            params: {
                api_key: process.env.ETSY_API_KEY
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error pinging Etsy:', error);
        throw error;
    }
}

module.exports = {
    pingEtsy
};