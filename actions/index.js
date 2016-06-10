import fetch from 'isomorphic-fetch'

export const REQUEST_PROJECTS = 'REQUEST_PROJECTS'
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS'

function requestProjects() {
  return {
    type: REQUEST_PROJECTS,
    projects
  }
}

function receiveProjects(projects, json) {
  return {
    type: RECEIVE_PROJECTS,
    projects,
    posts: json.data.children.map(child => child.data)
  }
}

function fetchProjects() {
  return dispatch => {
    dispatch(requestPosts())
    return fetch(`https://nickmask.firebaseio.com/projects.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveProjects(projects, json)))
  }
}
