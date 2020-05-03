import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";
import CreateProjectButton from "./Project/CreateProjectButton";
import { connect } from "react-redux";
import { getProjects } from "../actions/projectActions"
import Proptypes from "prop-types"

class Dashboard extends Component {

  componentDidMount(){
    this.props.getProjects();
  }

  render() {
    return (
      <div class="projects">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="display-4 text-center">Projects</h1>
              <br />
              <CreateProjectButton />
              <br />
              <hr />

              <ProjectItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  project: Proptypes.object.isRequired,
  getProjects: Proptypes.func.isRequired
}

const mapStateToProps = state => ({
  project:state.project
})

export default connect(mapStateToProps,{getProjects})(Dashboard);
