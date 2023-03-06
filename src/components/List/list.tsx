import { 
  ListWrapper, 
  ErrorMessage, 
  ListItem, 
  ListItemWrapper, 
  ListTitle, 
  NoContentList 
} from "./list.styles"

interface ListProps extends React.PropsWithChildren {
  data: Record<string, any>[];
  listItem(row: object, index: number): {
    component: JSX.Element
  }
}

export const List: React.FC<ListProps> = ({ data, listItem }) => {

  return (
    <ListWrapper>
        
      {data.length > 0 ? data.map((row, index) => {
        const { component } = listItem(row, index);
        return component;
      }) : (
        <NoContentList>
          Nenhum contato encontrado...
        </NoContentList>
      )}
    </ListWrapper>

  )
}