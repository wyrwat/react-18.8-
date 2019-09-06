Search = React.createClass({
    getInitialState() {
        return {
            searchingText: ''
        };
    },

    handleChange: function(event) {
        var searchingText = event.target.value;
        this.setState({
            searchingText: searchingText
        });
    },

    render: function() {
        var styles = {
            fontSize: '1.5em',
            width: '90%',
            maxWidth: '350px'
        };

        return <input 
                    type='text'
                    onChange={this.handleChange}
                    placeHolder='Enter search phrase'
                    styles={styles}
                    value={this.state.searchTerm}
                />
    }
});