const TABLE_NAME = 'all-for-you';
const config = {
    PORT: process.env.PORT || 5000,
    //DB_CONNECTION: `mongodb://localhost/${TABLE_NAME}`,
    DB_CONNECTION: `mongodb+srv://purveshpatil111:UJcqNDuq9hEvF00n@cluster0.jzayejy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    SECRET: 'badumts',
    SALT: 10,
    COOKIE_NAME: 'USER_SESSION',
    CLOUDINARY_NAME: 'silenceiv',
    CLOUDINARY_API_KEY: 626847416757451,
    CLOUDINARY_API_SECRET: '3NzQ5GbrcSjW0EERTJd5XZvfcT8',
    CLOUDINARY_STORAGE: 'pza5zln6'
}

module.exports = config;