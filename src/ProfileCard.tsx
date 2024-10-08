import React from 'react';
interface Profile {
    bio: string;
    website: string;
   }
   
   
   const ProfileCard: React.FC<Profile> = ({ bio, website }) => {
    return (
      <div>
        <p>Bio: {bio}</p>
        <p>Website: <a href={website}>{website}</a></p>
      </div>
    );
   };
   
   export default ProfileCard;