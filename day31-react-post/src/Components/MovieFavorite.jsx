import React from 'react';

export default class MovieFavorite extends React.Component {
    constructor(props) {
        super(props);

        // initial state of this component
        this.state = {
            favorite: null
        };
    }

    componentDidMount = () => {
        fetch(`http://www.laravel.test/api/movies/favorite?user_id=1&movie_id=${this.props.movie_id}`)
        .then(response => response.json())
        .then(json_data => {
            this.setState({
                favorite: json_data.favorite
            })
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://www.laravel.test/api/movies/favorite/toggle', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                "movie_id": this.props.movie_id,
                "user_id": 1
            })
        })
        .then(response => response.json())
        .then(json_data => {
            this.setState({
                favorite: json_data.data.favorite
            })
        })
    }

    render() {

        // use this.state.favorite to prepare different HTML output
        // based on its value
        let label = 'Loading...';
        if (this.state.favorite === true) {
            label = 'Unfavorite this movie';
        } else if (this.state.favorite === false) {
            label = 'Favorite this movie';
        }

        return (
            <>
                <h2>This is the MovieFavorite component! Favoriting movie { this.props.movie_id }</h2>

                <form action="" onSubmit={ this.handleSubmit }>
                    <button>{ label }</button>
                </form>
            </>
        )
    }

}