import './Main.css';
import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { API, graphqlOperation } from 'aws-amplify';
import listOpenDataQuery from '../graphql/queries';

import OpenData from '../components/OpenData';
import OpenDataList from '../components/OpenDataList';

// search condition list 
import tags from '../components/TagList.json';

// execute GraphQL
async function asyncOpenDataList (filterValue){
  console.log(filterValue);
  const filter =  {filter: {Tags : {contains: filterValue}}};
  return await API.graphql(graphqlOperation(listOpenDataQuery, filter));
}

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResult: []
    };
  }

  render() {

  const OpenDataItems = [];

  const tagList = tags["tags"];

  const handleChange = (event, value)  => {
    asyncOpenDataList(value).then(
      value => {
       console.log(value.data.listOpenData.items);
       const listOpenDataLength = value.data.listOpenData.items.length; 
       for (let index=0; index<listOpenDataLength; index++){
        OpenDataItems.push(<OpenData key={index} {...value.data.listOpenData.items[index]}/>);
       }

       this.setState({ "searchResult" : OpenDataItems});
       console.log(this.state.searchResult); 
      }
      );
  } 
  return (
    <div className="main">
      <img src="/images/logo_320x320.png" alt="title" className="titleImage" />

      <Autocomplete className="autocomplete"
        variant="outlined"
        options={tagList}
        onChange={handleChange}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="keywords" />}
      />

    <OpenDataList openDataList={this.state.searchResult} />
    </div>
  );
}
}

export default Main;
