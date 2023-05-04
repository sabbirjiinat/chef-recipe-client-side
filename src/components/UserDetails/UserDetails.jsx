import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const UserDetails = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="mx-12 my-4">
      {user && (
        <div className="card card-compact w-96 bg-base-100 shadow-2xl">
          <figure>
            <img
              className="w-full h-52 object-cover"
              src={user.photoURL}
              alt="User Profile Picture"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-semibold text-3xl ">
              Name :{" "}
              {user.displayName ? user.displayName : "Name Not Available"}
            </h2>
            <p className="text-base font-semibold">
              Email : {user.email ? user.email : "Email Not Available"}
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
