const GIPHY_LOADING_URL = 'http://www.ifmo.ru/images/loader.gif';
const GIPHY_PUB_KEY = 'XtXeLmnH2XZQ0lolz7EmvTR67BKKFUM0';
const GIPHY_API_URL = 'https://api.giphy.com/v1/gifs/search?api_key=XtXeLmnH2XZQ0lolz7EmvTR67BKKFUM0&q=gif&limit=25&offset=0&rating=G&lang=en';

const styles = {
    minHeight: '310px',
    margin: '0.5em'
};

Gif = React.createClass({
    getUrl: function() {
      return this.props.sourceUrl || GIPHY_LOADING_URL;
    },
    render: function() {
      var url = this.props.loading ? GIPHY_LOADING_URL : this.props.url;
  
      return (
        <div style={styles}>
          <a href={this.getUrl()} title='view this on giphy' target='new'>
            <img id='gif' src={url} style={{width: '100%', maxWidth: '350px'}}/>
          </a>
        </div>
        );
    }
});