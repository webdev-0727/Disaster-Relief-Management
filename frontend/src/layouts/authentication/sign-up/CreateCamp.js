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
import { MicNoneOutlined } from "@mui/icons-material";

function CreateCamp() {

    const [disaster, setDisaster] = useState("");
  const [location, setLocation] = useState("");
  const [datetime, setDateTime] = useState("");
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [ngoid, setNgoId] = useState("");
  const [user,setUser] = useState("prag@gmail.com");
  const usersCollectionRef = collection(db, "Camps");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { Disaster: disaster, Location: location,Timestamp: datetime,Count: Number(count),Amount: Number(amount),NgoId: ngoid,User: user,Amount_Collected: Number(0) });
  };

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
            Raise A Camp
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="text" label="Disaster Name" variant="standard" fullWidth onChange={(event) => {
          setDisaster(event.target.value);
        }} />
            </MDBox>

            <MDBox mb={2}>
              <MDInput type="text" label="Location" variant="standard" fullWidth onChange={(event) => {
          setLocation(event.target.value);
        }}/>
            </MDBox>

            <MDBox mb={2}>
              <MDInput type="date" label="Date and Time" variant="standard" fullWidth onChange={(event) => {
          setDateTime(event.target.value);
        }}/>
            </MDBox>
          
            <MDBox mb={2}>
              <MDInput type="number" label="No. Of People Affected" variant="standard" fullWidth onChange={(event) => {
          setCount(event.target.value);
        }}/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="number" label="Amount Required" variant="standard" fullWidth onChange={(event) => {
          setAmount(event.target.value);
        }}/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="NGO Id" variant="standard" fullWidth onChange={(event) => {
          setNgoId(event.target.value);
        }}/>
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
              <MDButton variant="gradient" color="info" fullWidth onClick={createUser}>
                Create Camp
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default CreateCamp;
