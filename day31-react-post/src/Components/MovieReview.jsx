import React from 'react';
import MovieFavorite from './MovieFavorite.jsx';

export default class MovieReview extends React.Component {
    constructor(props) {
        super(props);

        this.movie_id = 48;

        this.state = {
            movie_data: null,
            text: '',
            rating: ''
        }
    }

    componentDidMount = () => {
        fetch(`http://www.laravel.test/api/movie?id=${this.movie_id}`)
        .then(response => response.json())
        .then(json_data => {
            this.setState({
                movie_data: json_data,
                text: 'Hooray!'
            })
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // send POST data to an endpoint
        fetch('http://www.laravel.test/api/review', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                "movie_id": this.movie_id,
                "user_id": 1,
                "text": this.state.text,
                "rating": this.state.rating
            })
        })
    }

    handleTextChange = (event) => {
        let text = event.target.value.replace('fuck', ':)');

        this.setState({
            text: text
        })
    }

    handleRatingChange = (event) => {
        let value = Math.max(0, Math.min(10, event.target.value));

        this.setState({
            rating: value
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {

        let movie = 'Loading...';
        if (this.state.movie_data !== null) { // if the data already came from fetch
            movie = (
                <div className="movie">
                    <h2>{ this.state.movie_data.name }</h2>
                    <img src={ this.state.movie_data.poster_url } alt=""/>
                </div>
            )
        }

        return (
            <div className="form">

                { movie }

                <form action="" method="post" onSubmit={ this.handleSubmit }>

                    <label htmlFor="">Text:</label><br />
                    <textarea name="text" cols="30" rows="10" value={ this.state.text } onChange={ this.handleTextChange }></textarea>
                    <br />
                    <br />
                    <label htmlFor="">Rating</label><br />
                    <input type="text" name="rating" value={ this.state.rating } onChange={ this.handleRatingChange } />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />

                </form>

                <MovieFavorite movie_id={ this.movie_id } />

            </div>
        )
    }
}