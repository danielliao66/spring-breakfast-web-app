import { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MenuCard from "./components/MenuCard";
import OrderCard from "./components/OrderCard";
import Button from '@mui/material/Button';

const baseURL = "http://localhost:8080";

function App() {  
  const [menu, setMenu] = useState([]);
  const [page, setPage] = useState(0);
  const [quantities, setQuantities] = useState([]);
  const [total, setTotal] = useState(0);
  const [isDineIn, setIsDineIn] = useState(true);
  const [orders, setOrders] = useState([]);

  const getMenu = async () => {
    const response = await fetch(`${baseURL}/menu`, {mode: "cors"});
    const data = await response.json();
    setMenu(data);
    setQuantities(new Array(data.length).fill(0));
  }

  const getOrders = async () => {
    const response = await fetch(`${baseURL}/orders`, {mode: "cors"});
    const data = await response.json();
    setOrders(data);
    console.log(data);
  }

  const handleNav = (event, newValue) => setPage(newValue)

  const handleOption = (event, newValue) => setIsDineIn(newValue === 0 ? true : false)

  const handleAdd = (index) => {
    const copy = [...quantities];
    copy[index]++;
    setQuantities(copy);
    setTotal(total + menu[index].price);
  }

  const handleReset = (index) => {
    setTotal(total - menu[index].price * quantities[index]);
    const copy = [...quantities];
    copy[index] = 0;
    setQuantities(copy);
  }

  const handleSubmit = async () => {
    if (total === 0) {
      alert("You did not order anything")
    }
    else {
      const order = {orderedItems: menu.map((item, index) => ({ name: item.name, quantity: quantities[index]})).filter((item) => item.quantity !== 0), option: isDineIn ? "Dine in": "Take away"}

      const response = await fetch(`${baseURL}/order`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
      });
      const data = await response.json();
      setQuantities(new Array(menu.length).fill(0));
      setTotal(0);
      setTimeout(() => alert(`Your order is successful\nYour order id is ${data}`), 500);
    }
  }

  const renderSwitch = (page) => {
    switch (page) {
      case 0:
        return (
          <Typography variant="h2" sx={{ mt: 10 }} component="div" align="center">
            Welcome to<br />Yummy Breakfast<br />Order System!
          </Typography>
        );
      case 1:
        return (
          <Grid container spacing={3} justifyContent="center">
            {menu.map((item, index) => (
              <Grid key={index} item>
                <MenuCard name={item.name} price={item.price}/>
              </Grid>
            ))}
          </Grid>
        );
      case 2:
        return (
          <>
            <Tabs value={isDineIn ? 0 : 1} onChange={handleOption} centered sx={{mb: 3}}>
              <Tab label={<h3>Dine in</h3>}/>
              <Tab label={<h3>Take away</h3>}/>
            </Tabs>
            <Typography variant="h6" align="right">
              Total: ${total}
            </Typography>  
            <Grid container spacing={3} justifyContent="center">
              {menu.map((item, index) => (
                <Grid key={index} item>
                  <OrderCard 
                    name={item.name}
                    price={item.price}
                    quantity={quantities[index]}
                    index={index}
                    handleAdd={handleAdd}
                    handleReset={handleReset}
                  />
                </Grid>
              ))}
            </Grid>
            <Button variant="contained" onClick={handleSubmit} style={{float: 'right'}} sx={{ mb: 1.5 }}>Confirm Order</Button>
          </>  
        ); 
      case 3:
        return (
          <Grid container spacing={25} justifyContent="center">
            <Grid item>
              <Typography variant="h2" align="center" sx={{ mb: 2.5 }}>
                Preparing<br />
              </Typography>
              {orders.filter((order) => !order.isReady).map((order, index) => (
                <Typography key={index} variant="h3" align="center">
                  {order.orderId}
                </Typography>
              ))}
            </Grid>
            <Grid item>
              <Typography variant="h2" align="center" sx={{ mb: 2.5 }}>
                Ready<br />
              </Typography>
              {orders.filter((order) => order.isReady).map((order, index) => (
                <Typography key={index} variant="h3" align="center">
                  {order.orderId}
                </Typography>
              ))}
            </Grid>
          </Grid>
        )               
      default:
        return (
          <h1>Error: page not valid!</h1>
        )
    }
  }

  return (
    <>
      <Tabs value={page} onChange={handleNav} centered sx={{mb: 3}}>
        <Tab label={<h2>Home</h2>}/>
        <Tab label={<h2>Menu</h2>} onClick={getMenu}/>
        <Tab label={<h2>Order</h2>} onClick={getMenu}/>
        <Tab label={<h2>Check Orders</h2>} onClick={getOrders}/>
      </Tabs>
      {renderSwitch(page)}      
    </>
  );
}

export default App;
