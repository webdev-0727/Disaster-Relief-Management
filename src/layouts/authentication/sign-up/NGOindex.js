import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

import { useState } from "react";
import {
  collection, 
  addDoc
} from "firebase/firestore";
import { db } from "../../../firebase-config";
// import { NetworkWifiRounded } from "@mui/icons-material";


function Cover1() {
  const [newName, setNewName] = useState("");
  const [newId, setNewId] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const usersCollectionRef = collection(db, "NGO");

  const createNGO = async () => {
    await addDoc(usersCollectionRef, { Name: newName, Id: newId, email: newEmail, password: newPassword });
  };

  // const updateUser = async (id, Age) => {
  //   const userDoc = doc(db, "Donaters", id);
  //   const newFields = { Age: Age + 1 };
  //   await updateDoc(userDoc, newFields);
  // };

  // const deleteUser = async (id) => {
  //   const userDoc = doc(db, "Donaters", id);
  //   await deleteDoc(userDoc);
  // };

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollectionRef);
  //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };

  //   getUsers();
  // }, []);

  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="text" label="NGO Name" variant="standard" fullWidth  onChange={(event) => {
          setNewName(event.target.value);
        }}/> 
            </MDBox>
            
            <MDBox mb={2}>
              <MDInput type="text" label="NGO Unique ID" variant="standard" fullWidth onChange={(event) => {
          setNewId(event.target.value);
        }}/>
            </MDBox>
          <MDBox mb={2}>
              <MDInput type="email" label="Email" variant="standard" fullWidth onChange={(event) => {
          setNewEmail(event.target.value);
        }}/>
            </MDBox>

            <MDBox mb={2}>
              <MDInput type="password" label="Password" variant="standard" fullWidth onChange={(event) => {
          setNewPassword(event.target.value);
        }}/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Confirm Password" variant="standard" fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={createNGO}>
                sign up
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in/ngo-login"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign in
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover1;
