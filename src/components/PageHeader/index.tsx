import React from "react";
import { FaPlus } from "react-icons/fa";
import { colorPalette } from "../../config/colorPalette";
import Button from "../Button";
import { Grid } from "../Grid";
import { InputField } from "../InputField";
import { Container, SearchInput } from "./pageHeader.styles";

import { FiPlus } from 'react-icons/fi'
import { Field } from "react-final-form";

interface PageHeaderProps {
  onClick: () => void;
  title: string;
  handleSearch: (term?: string) => void
}

export const PageHeader: React.FC<PageHeaderProps> = ({ onClick, title, handleSearch }) => {

  return (
    <Container>
      {/* <Field
        name='telefone'
        
        render={({ input, meta }) => (
          <div> */}
            <SearchInput 
              placeholder={"Pesquisar..."}
              onChange={(e) => handleSearch(e.target.value)}
            />
          {/* </div>
        )} 
      />*/}
      
      <Button
        color={colorPalette.orange[300]}
        onClick={onClick}
      >
        <FiPlus size={20} />
        {title}
      </Button>
    </Container>
  );
};



{/* <Grid container>
      <Grid
        item
        xs={6}
        style={{
          fontSize: "26px",
          color: colorPalette.primary[900],
          fontWeight: "bold",
        }}
      >
        {title}
      </Grid>
      <Grid
        item
        xs={6}
        style={{
          fontSize: "18px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button onClick={onClick} testid={`pageheader--add-button`}>
          <FaPlus size="16px" /> Add anime
        </Button>
      </Grid>
    </Grid> */}