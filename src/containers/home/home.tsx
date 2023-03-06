import React from "react"
import ModalDialog from "../../components/ModalDialog"
import { PageHeader } from "../../components/PageHeader"
import { useContacts } from "../../store/contacts/useContacts"
import { Photos } from "../../store/people/people.types"
import { usePeople } from "../../store/people/usePeople"
import { BorderAnimated, ListTab, TabItem } from "./home.styles"
import { ModalContent } from "./modalContent"

import throttle from 'lodash.throttle'
import api from "../../services/api"
import { Contacts } from "../../store/contacts/contacts.types"
import { useAuthUser } from "react-auth-kit"
import { List } from "../../components/List/list"
import { ListContent } from "./listContent/listContent"


export const Home: React.FC<React.PropsWithChildren> = () => {

  const { contacts, fetchContacts, favorites, fetchFavorites } = useContacts();
  const { people, fetchPeople } = usePeople();

  const [displayList, setDisplayList] = React.useState<Contacts[]>([]);

  const [openModal, setOpenModal] = React.useState<{
    open: boolean, 
    values: any,
    title: string;
    favorite?: boolean
  }>({ 
    open: false, 
    values: {},
    title: '' 
  });

  
  const [hoverTab, triggerHoverTab] = React.useState<{
    'favoritos'?: boolean,
    'todos'?: boolean
  }>({
    'favoritos': false,
    'todos': false
  })

  const [activeTab, setActiveTab] = React.useState<{
    'favoritos'?: boolean,
    'todos'?: boolean
  }>({
    'favoritos': true,
    'todos': false
  })

  const [photos, setPhotos] = React.useState<Photos[]>([]);

  const fullList = React.useMemo(
    () => {
      if (activeTab['favoritos']) 
        return favorites;

      return [...favorites, ...(contacts.filter((it) => {
        let equal = false;
        favorites.forEach(fav => {
          if (fav.id == it.id) {
            equal = true
          } 
        })
        if (equal) 
          return false
        return true
    }))]},
    [contacts, favorites, activeTab]
  )

  

  React.useEffect(() => {
    fetchContacts();
    fetchFavorites();
  }, [])

  React.useEffect(() => {
    if (activeTab['favoritos']) 
      setDisplayList(favorites);

    else {
      setDisplayList(fullList)
      // setDisplayList([
      //   ...favorites, 
      //   ...(contacts.filter((it) => {
      //     let equal = false;
      //     favorites.forEach(fav => {
      //       if (fav.id == it.id) {
      //         equal = true
      //       } 
      //     })
      //     if (equal) 
      //       return false
      //     return true
      // }))]);
    }
  }, [favorites, contacts, activeTab])

  
  const handleSearch = throttle(
    (term) => {
      setActiveTab({ todos: true, favoritos: false })
      if (!term) {
        setDisplayList(fullList)
        return;
      }
      api.searchContacts({ termo: term }).then((res) => {
        if (res) {
          setDisplayList(res)
        } else {
          setDisplayList(fullList)
          
        }
      })
    },
    500,
    { leading: false }
  )
  
  return (
    <div>
      <PageHeader 
        onClick={() => setOpenModal({ open: true, values: {}, title: 'Adicionar contato' })}
        title="Adicionar contato"
        handleSearch={handleSearch}
      />
      <ListTab>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <BorderAnimated active={activeTab['favoritos']} hoverTab={hoverTab['favoritos']}/>
          <TabItem 
            active={activeTab['favoritos']}
            onClick={() => setActiveTab({ 'favoritos': true })} 
            onMouseEnter={!activeTab['favoritos'] ? (() => triggerHoverTab({'favoritos': true})) : () => {}}
            onMouseLeave={() => triggerHoverTab({'favoritos': false})}
          >
            Favoritos
          </TabItem>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <BorderAnimated active={activeTab['todos']} hoverTab={hoverTab['todos']}/>
          <TabItem 
            active={activeTab['todos']}
            onClick={() => setActiveTab({ 'todos': true })}
            onMouseEnter={!activeTab['todos'] ? (() => triggerHoverTab({'todos': true})) : () => {}}
            onMouseLeave={() => triggerHoverTab({'todos': false})}
          >
            Todos
          </TabItem>
        </div>
      </ListTab>
      <List 
        data={displayList}
        listItem={(row: Contacts, index) => ({
          component: <ListContent {...row} index={index} setOpenModal={setOpenModal} />
        })}
      />
      {openModal.open && (
        <ModalDialog
          open={openModal.open}
          title={openModal.title}
          onClose={() => setOpenModal({ open: false, values: {}, title: '' })}
        >
          <ModalContent 
            values={openModal.values} 
            onClose={() => setOpenModal({ open: false, values: {}, title: '' })} 
            favorite={openModal.favorite}
          />
        </ModalDialog>
      )}

    </div>
  ) 
}