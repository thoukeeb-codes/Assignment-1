import React from 'react';

const Body = ({ data, loading }) => {
  return (
    <div className="App-body">
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.avatar} alt={user.first_name} />
            <h3>{user.first_name} {user.last_name}</h3>
            <p>{user.email}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Body;