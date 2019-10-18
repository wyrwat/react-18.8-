const GIPHY_PUB_KEY = 'XtXeLmnH2XZQ0lolz7EmvTR67BKKFUM0';
const GIPHY_API_URL = 'https://api.giphy.com/v1/gifs/search?api_key=XtXeLmnH2XZQ0lolz7EmvTR67BKKFUM0&q=gif&limit=25&offset=0&rating=G&lang=en';

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
    //19.6 exercise start hire:
    getGif: function(searchingText, callback) { 
        let url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText; 
        let xhr = new XMLHttpRequest(); 
        xhr.open('GET', url);
        xhr.onload = function() {
            if (xhr.status === 200) {
               var data = JSON.parse(xhr.responseText).data; 
                var gif = {  
                    url: data[0].images.fixed_width_downsampled.url,
                    sourceUrl: data[0].url,
                };
                callback(gif); 
            }
        };
        xhr.send();
    },

    render: function() {
        const styles = {
            margin: '0 auto',
            textAlign: 'center',
            width: '90%'
        };

        return (
            <div style={styles}>
                <h1>Gif Browser</h1>
                <p>Find Gif on <a href='http://giphy.com'>giphy</a>Press Enter to downlod gif</p>
                <Search onSearch={this.handleSearch}/>
              <Gif
               loading={this.state.loading}
               url={this.state.gif.url}
               sourceUrl={this.state.gif.sourceUrl}
              />      
            </div>
        );
      }
    });
