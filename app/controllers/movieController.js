const axios = require("axios");

const renderForm = (req, res) => {
    res.render("index", { movie: null, error: null }); // Render the EJS view without any movie data initially
};

const fetchMovieData = async (req, res) => {
    const { movieName } = req.query;

    if (!movieName) {
        return res.status(404).json({ message: "movie name is required" });
    }

    try {
        const response = await axios.get(
            `https://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${process.env.API_KEY
            }`
        );

        if (response.data.Response === "False") {
            return res.status(404).json({ message: "movie not found" });
        }

        return res.json({ data: response.data });
    } catch (error) {
        return res
            .status(500)
            .json({ message: "An error occurred while fetching movie data" });
    }
};

module.exports = {
    renderForm,
    fetchMovieData,
};