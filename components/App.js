var GIPHY_PUB_KEY = 'XtXeLmnH2XZQ0lolz7EmvTR67BKKFUM0';
var GIPHY_API_URL = 'https://api.giphy.com/v1/gifs/search?api_key=XtXeLmnH2XZQ0lolz7EmvTR67BKKFUM0&q=gif&limit=25&offset=0&rating=G&lang=en';

App = React.createClass({
    getInitialState() {
        return {
            loading: false,
            searchingText: '',
            gif: {}    
        };
    },

    handleSearch: function(searchingText) { 
        this.setState({
          loading: true  
        });
        this.getGif(searchingText, function(gif) {  
          this.setState({  
            loading: false,  
            gif: gif,  
            searchingText: searchingText  
          });
        }.bind(this));
      },

    getGif: function(searchingText, callback) { 
        var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText; 
        var xhr = new XMLHttpRequest(); 
        xhr.open('GET', url);
        xhr.onload = function() {
            if (xhr.status === 200) {
               var data = JSON.parse(xhr.responseText).data; 
                var gif = {  
                    url: data.fixed_width_downsampled_url,
                    sourceUrl: data.url
                };
                callback(gif); 
            }
        };
        xhr.send();
    },

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
                <Search
                    on Search={this.handleSearch}
                />
              
              <Gif
                loading={this.state.loading}
                url={this.state.gif.url}
                sourceUrl={this.state.gif.sourceUrl}
              />      
            </div>
        );
    }
    
    });