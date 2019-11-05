import React from 'react';

export default class StudentList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }

    componentDidMount = () => {
        fetch('https://classes.codingbootcamp.cz/api/attendance/coding-bootcamp/autumn-2019/2019-11-05')
        .then(response => response.json())
        .then(data => {
            this.setState({
                data: data
            })
        })
    }

    formatTime = (date_string) => {
        if (date_string === null) {
            return '--';
        }
        
        let date = new Date(date_string);
 
        return date.getHours() + ':' + (`0${date.getMinutes()}`.slice(-2));
    }

    render() {

        let content = 'Loading...';
        if (this.state.data !== null) {
            content = (
                <>
                    <h1>Date: { this.state.data.date }</h1>
                    <h2>Attendance:</h2>
                    <table>
                        <tbody>
                            {
                                this.state.data.attendance.map(student => (
                                    <tr key={ student.id }>
                                        <th>{ student.name }</th>
                                        <td>{ this.formatTime(student.from) }</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </>
            )
        }

        return (
            <>
                { content }
            </>
        )
    }

}