/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc, 
  query, 
  where
} from "firebase/firestore";
import "./index.css";

import { Button } from "@mui/material";
import React, { useContext } from "react";

import { TransactionContext, connectWallet } from "../../context/TransactionContext";

//import useFetch from "../../hooks/useFetch";
//import dummyData from "../utils/dummyData";
import { shortenAddress } from "../../utils/shortenAddress";

function Tables() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = query(collection(db, "Camps"), where("User", "==", "prag@gmail.com"));

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();

  const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
    //const gifUrl = useFetch({ keyword });
  
    return (
      // <div className="bg-[#181918] m-4 flex flex-1
      //   2xl:min-w-[450px]
      //   2xl:max-w-[500px]
      //   sm:min-w-[270px]
      //   sm:max-w-[300px]
      //   min-w-full
      //   flex-col p-3 rounded-md hover:shadow-2xl"
      // >
        // <div className="flex flex-col items-center w-full mt-3">
        //   <div className="display-flex justify-start w-full mb-6 p-2">
        //     <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
        //       <p className="text-white text-base">From: {shortenAddress(addressFrom)}</p>
        //     </a>
        //     <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
        //       <p className="text-white text-base">To: {shortenAddress(addressTo)}</p>
        //     </a>
        //     <p className="text-white text-base">Amount: {amount} ETH</p>
        //     {message && (
        //       <>
        //         <br />
        //         <p className="text-white text-base">Message: {message}</p>
        //       </>
        //     )}
        //   </div> 
          // <img
          //   src={gifUrl || url}
          //   alt="nature"
          //   className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
          // /> 
          // <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          //   <p className="text-[#37c7da] font-bold">{timestamp}</p>
          // </div>
          
          
                <tr>
                    <td>{shortenAddress(addressFrom)}</td>
                    <td>{shortenAddress(addressTo)}</td>
                    <td>{amount}</td>
                    <td>{message}</td>
                    <td>{timestamp}</td>
                    
                  </tr>
                        
        //</div>
      //</div>
    );
  };
  const { transactions, currentAccount } = useContext(TransactionContext);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Authors Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Projects Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox> */}
      {/* <div className="container">
            <h1>Your Donations</h1>
            <table id="customers">
                <thead>
                <tr>
                    <th>Disaster</th>
                    <th>Location</th>
                    <th>No. of People Affected</th>
                    <th>Amount Needed</th>
                    <th>Amount Collected</th>
                </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.Disaster}</td>
                                <td>{user.Location}</td>
                                <td>{user.Count}</td>
                                <td>{user.Amount}</td>
                                <td>{user.Amount_Collected}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div> */}
        <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Latest Transactions
          </h3>
        ) : (
          <div>
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to see the latest transactions
          </h3>
          <Button onClick={connectWallet}>Connect</Button>
          </div>
        )}

        <div className="flex flex-wrap justify-center items-center mt-10">
        <table id="customers">
                <thead>
                <tr>
                    <th>From</th>
                    <th>To</th>
                    <th>Amount</th>
                    <th>Message</th>
                    <th>Timestamp</th>
                </tr>
                </thead>
                <tbody>
          {[...transactions].reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
             </tbody>
            </table>
        </div>
      </div>
    </div>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;








// const Transactions = () => {
  

//   return (
    
//   );
// };

// export default Transactions;
