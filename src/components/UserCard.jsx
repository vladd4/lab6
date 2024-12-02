import React from "react";

export default function UserCard({ user }) {
  return (
    <div className="user-card">
      <img alt="User" src={user?.picture?.large} className="user-image" />
      <div className="user-info">
        <p>
          Name:{" "}
          {`${user?.name?.title} ${user?.name?.first} ${user?.name?.last}`}
        </p>
        <p>City: {user?.location?.city}</p>
        <p>Postcode: {user?.location?.postcode}</p>
        <p>Phone: {user?.phone}</p>
      </div>
    </div>
  );
}
