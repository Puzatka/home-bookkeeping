import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Item } from "helpers/materialStyle";
import Button from "@mui/material/Button";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import InsightsIcon from "@mui/icons-material/Insights";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <Grid xs={3} md={3}>
        <Item>
          <Stack direction="column" spacing={2}>
            {/* <NavLink to="/income"> 
                        <Button variant="contained" startIcon={<CreditScoreIcon />}> 
                            Income
                        </Button> 
                    </NavLink> */}
            <NavLink to="/expense">
              <Button variant="outlined" startIcon={<LocalGroceryStoreIcon />}>
                Expense
              </Button>
            </NavLink>
            {/* <Button variant="outlined" startIcon={<MoneyOffIcon />}>
                            Debts
                        </Button> */}
            <NavLink to="/dashboard">
              <Button variant="outlined" startIcon={<InsightsIcon />}>
                Dashboard
              </Button>
            </NavLink>
            <Button variant="outlined" startIcon={<CurrencyExchangeIcon />}>
              Currencies
            </Button>
            {/* <Button variant="outlined" startIcon={<CreditScoreIcon />}>
                            Other
                        </Button> */}
          </Stack>
        </Item>
      </Grid>
    </>
  );
};

export default Menu;
