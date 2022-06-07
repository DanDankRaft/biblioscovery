import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

export default class SearchBox extends React.Component {
    constructor(props)
    {
      super(props);
      this.onSubmitSearch = this.onSubmitSearch.bind(this);
    }
  
    onSubmitSearch(e)
    {
      e.preventDefault();
      let query = e.target.query.value;
      if(query != "")
        this.props.router.push(`/search?q=${e.target.query.value}`);
    }
  
    render()
    {
      return (
      <form className='searchbox' action="." onSubmit={this.onSubmitSearch}>
        <input type='search' name="query" defaultValue={this.props.value} placeholder='Start your journey...'></input>
        <button type='submit'><FontAwesomeIcon className='searchicon' icon={faMagnifyingGlass}/><span className='searchtext'>Search</span></button>
      </form>);
    }
  }