
import styles from "./Profile.module.scss";

//^ component
import Main from "../../components/profile-component/ProfileComponent"
import Header from "../../components/navigation/Header/Header";

const Profile = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default Profile