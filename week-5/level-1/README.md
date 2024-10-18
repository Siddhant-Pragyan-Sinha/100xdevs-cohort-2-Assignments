You have to create a simple React App which has a reusable Card Component which has the following
 - Ability to pass in props to the Component
 - The Card must show a person's
    - Name
    - A short descriptio
    - LinkedIn, Twitter and other Social Media Handle buttons
    - Interests Section
 - You can assume that this is kind of an e-business card and feel free to put in your creativity
 - Additional & Slightly advanced:
    - Create a page where you can add these kind of Cards by taking input from the user
    - Create a backend server where these cards get stored in a DB and can handle basic CRUD operations
    - Give the feature to perform CRUD operations from the frontend (Can be restricted to the admin only as well)
  
import React from 'react';
import AddCard from './pages/AddCard';
import Card from './components/Card';
import './App.css'; // Import the CSS file

const App = () => {
    return (
        <div className="App">
            <h1>E-Business Card</h1>
            <AddCard />
            <div className="card-container"> {/* Container for cards */}
                {/* Example of using Card component, replace with dynamic rendering later */}
                <Card 
                    name="John Doe" 
                    description="Software Developer" 
                    linkedin="https://linkedin.com/in/johndoe" 
                    twitter="https://twitter.com/johndoe" 
                    interests={["Coding", "Music", "Traveling"]}
                />
                <Card 
                    name="Jane Smith" 
                    description="Graphic Designer" 
                    linkedin="https://linkedin.com/in/janesmith" 
                    twitter="https://twitter.com/janesmith" 
                    interests={["Design", "Art", "Photography"]}
                />
            </div>
        </div>
    );
};

export default App;
