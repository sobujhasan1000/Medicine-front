import { useSession } from "next-auth/react";

const UserProfile = () => {
  const { data: session, status } = useSession();

  // Log the session to see the details
  console.log(session);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>You are not logged in</div>;
  }

  // Access user info from the session
  const user = session.user;
  const accessToken = session.accessToken; // if you included this in the session

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <p>Email: {user?.email}</p>
      <p>Access Token: {accessToken}</p>
    </div>
  );
};

export default UserProfile;
