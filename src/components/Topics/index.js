import React, {useState} from 'react';
import Avatar from 'react-avatar';
import './index.css';

function Topics({topics, topicChange}) {
    const [selected, setSelected]  = useState(topics[0]);

    return <div className="filter-container">
        {topics.map((topic,index) => (
            <div className="filter-container-item" key={index}>
                {console.log('selected',selected)}
            <div className="filter-container-item-icon">
                <Avatar src={topic.img} round="50px" size="30" fgColor="red" color="#d1dff0" />
            </div>
             <p className={selected.name===topic.name?'filter-selected':''}
                onClick={()=>{ setSelected(topic); topicChange(topic.name)}}>
                 {topic.name}  </p>
            </div>
        ))}
         </div>;
}

export default Topics;
