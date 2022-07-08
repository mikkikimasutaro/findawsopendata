import '../index.css';
import './Main.css';
import React, { useState } from 'react';
import { withStyles } from '@mui/material/styles';
import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { API, graphqlOperation } from 'aws-amplify';
import listOpenData from '../graphql/queries';

// OpenDataList取得
import OpenData from '../components/OpenData';
import OpenDataList from '../components/OpenDataList';
import tags from '../components/TagList.json';



const columns = [
  { field: 'schoolName', headerName: '学校名', width: 180 },
  { field: 'address', headerName: '住所', width: 180 },
  { field: 'lyrics', headerName: '歌詞', width: 180 },

];
const searchfields =[];
for (var i = 0; i < columns.length; i++) {
  searchfields.push(<MenuItem key={i+1} value={i+1}>{columns[i].headerName}</MenuItem>);
}


async function asyncOpenDataList (filterValue){
  console.log(filterValue);
  const filter =  {filter: {Tags : {contains: filterValue}}};
  return await API.graphql(graphqlOperation(listOpenData, filter));
}

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchfield: 1,
      inputText: [],
      searchResult: [],
      tabValue: 0
    };
  }

  render() {

  const OpenDataItems = [];
  var result = [];

  const tagList = tags["tags"];

  // Material-ui関連
  const { classes } = this.props;

  /**
  const handleChange = (event, value) => {
    for (let index=0; index<value.length; index++){
      console.log(value[index]);
    }
  }
  */

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
      <img src="/images/logo_720x720.png" alt="title" className="titleImage" />

      <Autocomplete className="main"
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
