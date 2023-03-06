import { FiEdit } from "react-icons/fi";
import { colorPalette } from "../../../config/colorPalette";
import { Contacts } from "../../../store/contacts/contacts.types";
import { formatPhone } from "../../../utils/validators";
import { ListItem, ListItemWrapper, ListTitle } from "./listContent.styles";

interface ListContentProps extends Contacts {
  setOpenModal: ({
    open,
    values,
    title,
    favorite
  }: {
    open: boolean;
    values: any;
    title: string;
    favorite?: boolean;
  }) => void;
  index: number
}

export const ListContent: React.FC<ListContentProps> = ({ setOpenModal, index, ...props }) => (

  <ListItemWrapper key={`${props.telefone}${index}`} style={{ borderLeft: props.favorite ? `3px solid ${colorPalette.orange[300]}` : ''}}>
    <ListItem>
      <ListTitle>{props.pessoa.nome}</ListTitle>
      <span>{props.email}</span>
      <span>{formatPhone(props.telefone)}</span>
    </ListItem>
    <ListItem>
      <b>Contato {props.tag}</b>
      <span>{props.pessoa.endereco.cidade} - {props.pessoa.endereco.estado}</span>
    </ListItem>
    <ListItem style={{ alignItems: 'flex-end' }}>
      <FiEdit 
        size={20} 
        onClick={() => setOpenModal({
          open: true,
          values: props,
          title: 'Editar/Excluir contato',
          favorite: props.favorite
        })} 
        style={{ cursor: 'pointer' }} 
      />
    </ListItem>
  </ListItemWrapper>
)