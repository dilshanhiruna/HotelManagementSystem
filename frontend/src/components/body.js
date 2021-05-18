import React, { useContext } from 'react';
import AddInventory from './AddInventory';
import InventoryList from './InventoryList';
import './Header.css'
import Sidenav from './sidenav';
import FrontOfficeSideNav from './FronOfficeSideNav';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DisplayInventory from './DisplayInventory';
import Suppliers from './Suppliers';
import SuppliersView from './SupplierView';
import BarInventorySidenav from './BarInventorySidenav';
import AddBarInventory from './AddBarInventory';
import AddAgent from './Add_Ajencies';
import ViewAgent from './ViewAllAgencies';
import ViewOne from './ViewOneAgent';
import Delet from './DeleteAgent';
import Bookings from './ViewBookings';
import ActiveBookings from './ActiveBookings';
import PassBookings from './PassBooking';
import BookingReq from './UpcomingBookings';
import Accept from './AcceptRequset';
import Decline from './DeleteBookingRequest';
import ReStock from './ReStock';
import FinalBill from './FinalBill';
import InventoryCheckout from './InventoryCheckout';
import PaidBill from './FinalBillPopup';
import viewBarorders from './viewbarorders'

// import Booking from './booking';


import CusSideNav from './customer/CusSideNav';
import Main from './customer/Main';
import AddBooking from './customer/AddBooking';
import CusLogin from './customer/CusLogin';
import CusReg from './customer/CusReg'
import AuthContext from '../context/AuthContext';
import cusLogout from './customer/CusLogout';




import ViewBeverages from './viewbeverages';
import BarReStock from './BarRestock';
import EditBeverages from './editBeverages';
import AddBarOrders from './AddBarOrders';




export default function Body() {

    const {loggedIn} = useContext(AuthContext);
    console.log(loggedIn);

    return (

        <Router>

           

            <div className="content">

                {/* {
                    loggedIn === true && <CusSideNav/>
                }
                 */}


                <BarInventorySidenav/>
                {/* <AddBooking/> */}
                {/* <Main/> */}
                {/* <Sidenav /> */}
                {/* <FrontOfficeSideNav/> */}
                
                {/* <Login/>
                <Route path="/frontOffice" exact component={FrontOfficeSideNav}/>
                <Route path="/inventory" exact component={Sidenav}/> */}
                

                {/* <div className="block"> */}
                
               



                    {/* Inventry Manager Routes */}
                    <Route path="/addinventory" exact component={AddInventory}/>
                    <Route path="/inventory" exact component={InventoryList}/>
                    <Route path="/displayinventory/:id" exact component={DisplayInventory}/>
                    <Route path="/suppliers" exact component={Suppliers}/>
                    <Route path="/supplierview/:id" exact component={SuppliersView}/>
                    <Route path="/restock" exact component={ReStock}/>
                    <Route path="/checkout" exact component={InventoryCheckout}/>



                     
                     {/* Front Office Manager Routes */}
                        {/* Agencies Routes */}
                            <Route path="/addAgent" exact component={AddAgent}/>
                            <Route path="/viewAllAgencies" exact component={ViewAgent}/>
                            <Route path="/viewOne/:id" exact component={ViewOne} />
                            <Route path="/deleteAgent/:id" exact component={Delet} />

                        {/* Bookings Routes */}
                            <Route path="/bookings" exact component={Bookings} />
                            <Route path="/active" exact component={ActiveBookings} />
                            <Route path="/pass" exact component={PassBookings} />
                            <Route path="/request" exact component={BookingReq} />
                            <Route path="/accept/:id" exact component={Accept} />
                            <Route path="/decline/:id" exact component={Decline} />

                        {/* Final Bill */}
                             <Route path="/FinalBill" exact component={FinalBill} />
                             <Route path="/PaidBill/:id" exact component={PaidBill} />
                             
                            


                      {/* end FrontOffice Manager Rout */}
                      
                      
                      {/* customer Routes       */}
                      {/* <Route path="/up" exact component={Booking}/> */}
                      <Route path="/addbooking" exact component={AddBooking}/>
                      <Route path="/cusLogin" exact component={CusLogin}/>
                      <Route path="/cusReg" exact component={CusReg}/>
                      <Route path="/cusLogout" exact component={cusLogout}/>

                {/* </div> */}



                <div className="block">

                        {/* Bar Manager Routes */}

                        {/*Bar Inventory Management Routes */}
                        
                    <Route path="/AddBarInventory" exact component={AddBarInventory}/>
                    <Route path="/viewbeverages" exact component={ViewBeverages}/>
                    <Route path="/barReStock" exact component={BarReStock}/>
                    <Route path="/editBeverages/:id" exact component={EditBeverages}/>
                    <Route path="/viewBarorders" exact component={viewBarorders}/>
                    <Route path="/addBarOrder" exact component={AddBarOrders}/>
                        {/*Bar Order Management Routes */}
                   
                    
                 
                 
                    



                     
                     {/* Front Office Manager Routes */}
                        {/* Agencies Routes */}
                            <Route path="/addAgent" exact component={AddAgent}/>
                            <Route path="/viewAllAgencies" exact component={ViewAgent}/>
                            <Route path="/viewOne/:id" exact component={ViewOne} />
                            <Route path="/deleteAgent/:id" exact component={Delet} />

                        {/* Bookings Routes */}
                            <Route path="/bookings" exact component={Bookings} />
                            <Route path="/active" exact component={ActiveBookings} />
                            <Route path="/pass" exact component={PassBookings} />
                            <Route path="/request" exact component={BookingReq} />
                            <Route path="/accept/:id" exact component={Accept} />
                            {/* <Route path="/decline/:id" exact component={Decline} /> */}

                        {/* Final Bill */}
                             <Route path="/FinalBill" exact component={FinalBill} />
                             <Route path="/PaidBill/:id" exact component={PaidBill} />
                             
                            


                      {/* end FrontOffice Manager Rout */}
                      
                      
                      {/* customer Routes       */}
                      {/* <Route path="/up" exact component={Booking}/> */}
                      <Route path="/addbooking" exact component={AddBooking}/>
                      <Route path="/cusLogin" exact component={CusLogin}/>
                      <Route path="/cusReg" exact component={CusReg}/>

            
                </div>
                </div>

            
        </Router>
    );
}
