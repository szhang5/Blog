import React, { Component } from 'react';
import { debounce, map } from 'lodash';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router-dom';
import responsive from '../assets/styles/responsive.css';
import styles from './styles/searchBlog.css';


class SearchBlog extends Component {
  constructor(props) {
    super(props);
    this.state = { options: [] };
    // This binding is necessary to make `this` work in the callback
    this.getOptions = this.getOptions.bind(this);
    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.debounceGetOptions = debounce(this.getOptions, 300);
  }

  getOptions(input) {
    if (input.length < 3) {
      return [];
    }
    return this.props.client.query({
      query: gql`
        query Posts($input: String!) {
          posts( where: {
            title_contains: $input
            status: PUBLISHED
          }){
            slug
            title
          }
        }`,
      variables: { input },
    }).then((response) => {
      const posts = map(response.data.posts, post => {
        return {
          value: post.slug, label: post.title
        };
      });
      this.setState({
        options: posts
      });
    });
  }

  handleInputChange(input) {
    this.debounceGetOptions(input);
  }

  handleOnSelect({ value }) {
    if (!value) {
      return null;
    }
    return this.props.history.push(`/post/${value}`);
  }

  render() {
    return (
      <div className={[styles.search, responsive.search].join(' ')}>
        <div className={[styles.searchDiv, responsive.searchDiv].join(' ')}>
          Search
        </div>
        <div className={styles.searchBox}>
          <Select
            onInputChange={this.handleInputChange}
            onChange={this.handleOnSelect}
            options={this.state.options}
            placeholder="Search"
          />
        </div>
      </div>
    );
  }
}


SearchBlog.propTypes = {
  client: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withApollo(withRouter(SearchBlog));
