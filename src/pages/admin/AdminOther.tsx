import Container from "@mui/material/Container";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function AdminOther() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Container
      maxWidth="xl"
      fixed
      sx={{ marginTop: "1rem", marginBottom: "1rem" }}
    >
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: "100vh",
        }}
      >
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: "divider",
            width: "15%",
            paddingTop: "1rem",
          }}
        >
          <Tab
            label="Item One"
            {...a11yProps(0)}
            sx={{ alignSelf: "self-start" }}
          />
          <Tab
            label="Item Two"
            {...a11yProps(1)}
            sx={{ alignSelf: "self-start" }}
          />
          <Tab
            label="Item Three"
            {...a11yProps(2)}
            sx={{ alignSelf: "self-start" }}
          />
          <Tab
            label="Item Four"
            {...a11yProps(3)}
            sx={{ alignSelf: "self-start" }}
          />
          <Tab
            label="Item Five"
            {...a11yProps(4)}
            sx={{ alignSelf: "self-start" }}
          />
          <Tab
            label="Item Six"
            {...a11yProps(5)}
            sx={{ alignSelf: "self-start" }}
          />
          <Tab
            label="Item Seven"
            {...a11yProps(6)}
            sx={{ alignSelf: "self-start" }}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </Box>
    </Container>
  );
}
