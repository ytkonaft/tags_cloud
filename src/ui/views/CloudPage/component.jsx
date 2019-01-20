import React from "react";
import TagItm from "ui/components/TagItm";
import "./index.sass";

class CloudPage extends React.PureComponent {
  componentDidMount() {
    this.props.getTags();
  }

  render() {
    const {
      fetching,
      tags: { tagById, tagsOrder }
    } = this.props.Cloud;
    return (
      <div className="cloud-page">
        {fetching ? (
          <h1>LOADING...</h1>
        ) : (
          <h1 className="tags-wrp">
            {tagsOrder.map(id => {
              const tag = tagById[id];
              return (
                <TagItm
                  label={tag.label}
                  id={id}
                  key={id}
                  sentimentScore={tag.sentimentScore}
                />
              );
            })}
          </h1>
        )}
      </div>
    );
  }
}

export default CloudPage;
