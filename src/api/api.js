// Core
import axios from 'axios';

// Instruments
import { delay } from '../helpers';

const API_URL = process.env.REACT_APP_API_URL;

export const api = {
    async getMovies(filter = 'upcoming') {
        await delay(3000); // simulate bad internet

        const { data: movies } = await axios.get(
            `${API_URL}/movies?filter=${filter}`,
        );

        return movies;
    },

    async getMovieById(id) {
        await delay(3000); // simulate bad internet

        const { data: movie } = await axios.get(`${API_URL}/movies/${id}`);

        return movie;
    },
};
