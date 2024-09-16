import React, { useState, useEffect } from 'react';
import { fetchUser, updateUser } from '../services/api'; // Ensure these functions are correctly implemented

const Profile = ({ match }) => {
  const [user, setUser] = useState(null);
  const [editable, setEditable] = useState(false);
  const [formData, setFormData] = useState({ name: '', bio: '', profilePicture: '' });
  const userId = match.params.id;

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await fetchUser(userId);
        setUser(response.data);
        setFormData({
          name: response.data.name,
          bio: response.data.bio,
          profilePicture: response.data.profilePicture
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    loadUser();
  }, [userId]);

  const handleUpdate = async () => {
    try {
      await updateUser(userId, formData);
      setUser(formData);
      setEditable(false);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="profile">
      {user && (
        <>
          <h1>{editable ? (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          ) : user.name}</h1>
          <img src={editable ? formData.profilePicture : user.profilePicture} alt={user.name} />
          <p>{editable ? (
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
            />
          ) : user.bio}</p>
          {editable ? (
            <button onClick={handleUpdate}>Save</button>
          ) : (
            <button onClick={() => setEditable(true)}>Edit</button>
          )}
        </>
      )}
    </div>
  );
};

export default Profile;
