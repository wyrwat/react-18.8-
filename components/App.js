App = React.createClass({
    render: function() {
        //dlaczego style pojawiaja sie w komponecie?czy nie latwiej stylowac w css?
        var styles = {
            margin: '0 auto',
            textAlign: 'center',
            width: '90%'
        };

        return (
            <div style={styles}>
                <h1>Gif Browser</h1>
                <p>Find Gif on <a href='http://giphy.com'>giphy</a>Press Enter to downlod gif</p>
                <Search/>
              <Gif
                loading={this.state.loading}
                url={this.state.gif.url}
                sourceUrl={this.state.gif.sourceUrl}
              />      
            </div>
        );
    }
    
    });