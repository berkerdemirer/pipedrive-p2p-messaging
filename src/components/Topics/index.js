import React, {useEffect} from 'react';
import Avatar from 'react-avatar';
import './index.css';

function Topics() {

    useEffect(() => {

    }, []);
    const topics = [ {name:'Knowledge',img:'/assets/topics/knowledge.png'},
                     {name:'Issues',img:'/assets/topics/issue.png'},
                     {name:'Random',img:'/assets/topics/random.png'}];
    return <div className="filter-container">
        {topics.map((topic,index) => (
            <div className="filter-container-item">
            <div className="filter-container-item-icon">
                <Avatar src={topic.img} round="50px" size="30" fgColor="red" color="#d1dff0" />
            </div>

             <p> {topic.name}</p>
            </div>
        ))}
         </div>;
}

export default Topics;
