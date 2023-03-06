import React from "react";
import { colorPalette } from "../../config/colorPalette";
import Button from "../Button";
import { Container, SearchInput } from "./pageHeader.styles";

import { FiPlus } from 'react-icons/fi'

interface PageHeaderProps {
  onClick: () => void;
  title: string;
  handleSearch: (term?: string) => void
}

export const PageHeader: React.FC<PageHeaderProps> = ({ onClick, title, handleSearch }) => {

  return (
    <Container>
      <SearchInput 
        placeholder={"Pesquisar..."}
        onChange={(e) => handleSearch(e.target.value)}
      />
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
