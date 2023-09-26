import React, { useState } from 'react';
import { Box, Button, Divider, Tab, Tabs, TextField,Paper,  Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography ,Dialog, DialogActions, DialogTitle,} from "@mui/material";
function App() {
  const [selectedModule, setSelectedModule] = useState(''); // State to store the selected module
  const [categories, setCategories] = useState([]); // State to store categories for the selected module
  const [categoryName, setCategoryName] = useState(''); // State to store the category name

  // Function to handle changes in the dropdown selection
  const handleModuleChange = (event) => {
    setSelectedModule(event.target.value);
    setCategories([]); // Clear categories when a new module is selected
  };

  // Function to add a category for the selected module
  const handleAddCategory = () => {
    if (categoryName.trim() !== '') {
      setCategories([...categories, categoryName]);
      setCategoryName('');
    }
  };

  return (
    <div>
          <Box
      sx={{
        margin: "0px 0px 10px 0px",
        width: '100%',
        height: 80,
        backgroundColor: "#005D7A",
        display: "flex",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h"
        marginLeft={1}
        color="#fff"
        backgroundColor="#005D7A"
        fontWeight="bold"
        marginRight={66}
        marginTop={1}
      >
        Add Category
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginRight: 1,
          backgroundColor: '#fff',
          borderRadius: '4px',
          height:23
         
        }}
      >
     
      </Box>
    </Box>
      <select value={selectedModule} onChange={handleModuleChange}>
        <option value="">Select a Module</option>
        <option value="Lost And Found">Lost And Found</option>
        <option value="Neighbor Watch">Neighbor Watch</option>
        <option value="Skill Hub">Skill Hub</option>
        <option value="Sell Zone">Sell Zone</option>
      </select>

      {selectedModule && (
        <div>
          <h3>Add a Category</h3>
          <input
            type="text"
            placeholder="Category Name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <button onClick={handleAddCategory}>Add Category</button>

          <h3>Categories for {selectedModule}</h3>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
