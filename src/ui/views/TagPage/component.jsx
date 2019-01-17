import React from "react";
import { Link } from "react-router-dom";
import "./index.sass";

class TagPage extends React.PureComponent {
  componentDidMount() {
    // in this place should be request for receiving data from the API by tag ID
    // because after page reload the redux state will be empty
    const { Tag, getTags } = this.props;
    if (!Tag) {
      getTags();
    }
  }

  render() {
    const { Tag } = this.props;
    if (!Tag) return <h1>Loading</h1>;
    return (
      <div className="tag-page">
        <div className="page-container">
          <div>
            <Link to="/" className="go-back-btn">
              Home
            </Link>
          </div>
          <div>
            <h1>{Tag.label}</h1>
            <ul>
              <li> Total Mentions: {Tag.volume}</li>
              <li> Positive Mentions: {Tag.sentiment.positive || 0}</li>
              <li> Neutral Mentions: {Tag.sentiment.neutral || 0}</li>
              <li> Negative Mentions: {Tag.sentiment.negative || 0}</li>
            </ul>
            <h3>List of page types: </h3>
            <ul>
              {Object.keys(Tag.pageType).map((name, itm) => (
                <li key={name}>
                  {name}: {Tag.pageType[name]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TagPage;
