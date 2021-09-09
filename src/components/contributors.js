import React from 'react'
import Avatar from 'react-avatar';
import './heros.css'

const data =[
    {
        username:'contributor 1',
        image:require('../images/user.png'),
        date:'join Since 2019',
    },
    {
        username:'contributor 2',
        image:require('../images/user.png'),
        date:'join Since 2019',
    },
    {
        username:'contributor 3',
        image:require('../images/user.png'),
        date:'join Since 2019',
    },
    {
        username:'contributor 4',
        image:require('../images/user.png'),
        date:'join Since 2019',
    },
    {
        username:'contributor 5',
        image:require('../images/user.png'),
        date:'join Since 2019',
    },
    {
        username:'contributor 6',
        image:require('../images/user.png'),
        date:'join Since 2019',
    },
]

const Contrib = () => {
    return (
        <div style={{justifyContent:'center',padding :20,flexWrap:'wrap'}}>
            <div>
                <h2>Trusted Contributers</h2>
                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
            </div>
            <div className="users">
             {data.map((user) => (
                <div>
               
               <Avatar name='Quiz Contributors' src={user.image} round={true} color={'#F3105F'}/>
               <div className="user">{user.username}</div>
               <div className="date">{user.date}</div>
                </div>
              ))}
    </div>
    <div>
        <p>Interested In Joining the Corequiz Guide team?We are recruiting Content</p>
        <p>Authors to help us improve the Corequiz Guide! Apply Now</p>
    </div>
        </div>
    )
}

export default Contrib
