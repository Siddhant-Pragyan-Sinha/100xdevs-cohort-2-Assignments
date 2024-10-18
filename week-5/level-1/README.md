You have to create a simple React App which has a reusable Card Component which has the following
 - Ability to pass in props to the Component
 - The Card must show a person's
    - Name
    - A short description
    - LinkedIn, Twitter and other Social Media Handle buttons
    - Interests Section
 - You can assume that this is kind of an e-business card and feel free to put in your creativity
 - Additional & Slightly advanced:
    - Create a page where you can add these kind of Cards by taking input from the user
    - Create a backend server where these cards get stored in a DB and can handle basic CRUD operations
    - Give the feature to perform CRUD operations from the frontend (Can be restricted to the admin only as well)
  
   import React from 'react';

const Card = ({ name, description, linkedin, twitter, interests }) => {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="social-media">
                <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href={twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
            <h3>Interests:</h3>
            <ul>
                {interests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                ))}
            </ul>
        </div>
    );
};

export default Card;



// import React from 'react';

// const Card = ({ name, description, linkedin, twitter, interests }) => {
//     return (
//         <div className="card">
//             <h2>{name}</h2>
//             <p>{description}</p>
//             <div className="social-media">
//                 <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
//                 <a href={twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
//             </div>
//             <h3>Interests:</h3>
//             <ul>
//                 {interests.map((interest, index) => (
//                     <li key={index}>{interest}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Card;
