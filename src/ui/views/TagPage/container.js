import { connect } from "react-redux";
import { cloudOperations } from "store/modules/Cloud";
import TagPage from "./component";

const mapStateToProps = (
  {
    Cloud: {
      tags: { tagById }
    }
  },
  props
) => {
  return {
    Tag: tagById && tagById[props.match.params.id]
  };
};
const mapDispatchToProps = {
  getTags: cloudOperations.getTags
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagPage);
