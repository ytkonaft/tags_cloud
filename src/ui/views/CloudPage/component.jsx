import React from "react";
import TagItm from "ui/components/TagItm";
import "./index.sass";

class CloudPage extends React.PureComponent {
  componentDidMount() {
    this.props.getTags();
  }

  calcFontSizeInPx = sentiment => {
    const { maxScore } = this.props.Cloud.tags;
    // min and max sizes in px
    const [min, max] = [5, 60];
    const size = min + (sentiment * (max - min)) / maxScore;
    return `${size}px`;
  };

  render() {
    const {
      fetching,
      tags: { tagById, tagsOrder }
    } = this.props.Cloud;
    const { calcFontSizeInPx } = this;
    return (
      <div className="cloud-page">
        {fetching ? (
          <h1>LOADING...</h1>
        ) : (
          <div>
            <div className="tags-wrp">
              {tagsOrder.map(id => {
                const tag = tagById[id];
                return (
                  <TagItm
                    label={tag.label}
                    id={id}
                    key={id}
                    fontSize={calcFontSizeInPx(tag.sentimentScore)}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CloudPage;
