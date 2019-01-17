import { connect } from "react-redux";
import { cloudOperations } from "store/modules/Cloud";
import CloudPage from "./component";

const mapStateToProps = ({ Cloud }) => ({
  Cloud
});

const mapDispatchToProps = {
  ...cloudOperations
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CloudPage);
