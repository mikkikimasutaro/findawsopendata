import React from 'react';
import PropTypes from 'prop-types';
import tags from './TagList.json';
import Chip from '@mui/material/Chip';


function ChipList({props}) {

  const handleClick = (index) => {
    // console.log(index);
    //chipList[index].push(<Chip key={index} label={tagList[index]} onClick={handleClick(key)}/>);
  };

    const tagList = tags["tags"];
    const [chipList, setChipList] = React.useState([]);

    for (let index=0; index<tagList.length; index++){
        chipList.push(<Chip key={index} label={tagList[index]} onClick={handleClick(index)}/>);
       }
    return (
    <div>
        {chipList}
    </div>
  );
}

export default ChipList;