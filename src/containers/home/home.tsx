import React from "react";
import ModalDialog from "../../components/ModalDialog";
import { PageHeader } from "../../components/PageHeader";
import { useContacts } from "../../store/contacts/useContacts";
import { usePeople } from "../../store/people/usePeople";
import { BorderAnimated, ListTab, TabItem, TabItemLabel } from "./home.styles";
import { ModalContent } from "./modalContent";

import throttle from "lodash.throttle";
import api from "../../services/api";
import { Contacts } from "../../store/contacts/contacts.types";
import { List } from "../../components/List/list";
import { ListContent } from "./listContent/listContent";

export const Home: React.FC<React.PropsWithChildren> = () => {
  const { contacts, fetchContacts, favorites, fetchFavorites } = useContacts();

  const [displayList, setDisplayList] = React.useState<Contacts[]>([]);

  const [openModal, setOpenModal] = React.useState<{
    open: boolean;
    values: any;
    title: string;
    favorite?: boolean;
  }>({
    open: false,
    values: {},
    title: "",
  });

  const [activeTab, setActiveTab] = React.useState<"favoritos" | "todos">(
    "favoritos"
  );

  const fullList = React.useMemo(() => {
    if (activeTab === "favoritos") return favorites;

    return [
      ...favorites,
      ...contacts.filter((it) => {
        let equal = false;
        favorites.forEach((fav) => {
          if (fav.id == it.id) {
            equal = true;
          }
        });
        if (equal) return false;
        return true;
      }),
    ];
  }, [contacts, favorites, activeTab]);

  React.useEffect(() => {
    fetchContacts();
    fetchFavorites();
  }, []);

  React.useEffect(() => {
    if (activeTab === "favoritos") setDisplayList(favorites);
    else {
      setDisplayList(fullList);
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
  }, [favorites, contacts, activeTab]);

  const handleSearch = throttle(
    (term) => {
      setActiveTab("todos");
      if (!term) {
        setDisplayList(fullList);
        return;
      }
      api.searchContacts({ termo: term }).then((res) => {
        if (res) {
          setDisplayList(res);
        } else {
          setDisplayList(fullList);
        }
      });
    },
    500,
    { leading: false }
  );

  return (
    <div>
      <PageHeader
        onClick={() =>
          setOpenModal({ open: true, values: {}, title: "Adicionar contato" })
        }
        title="Adicionar contato"
        handleSearch={handleSearch}
      />
      <ListTab>
        <TabItem
          active={activeTab === "favoritos"}
          onClick={() => setActiveTab("favoritos")}
        >
          <BorderAnimated className="tab-item-hover" />
          <TabItemLabel>Favoritos</TabItemLabel>
        </TabItem>

        <TabItem
          active={activeTab === "todos"}
          onClick={() => setActiveTab("todos")}
        >
          <BorderAnimated className="tab-item-hover" />
          <TabItemLabel>Todos</TabItemLabel>
        </TabItem>
      </ListTab>
      <List
        data={displayList}
        listItem={(row: Contacts, index) => ({
          component: (
            <ListContent {...row} index={index} setOpenModal={setOpenModal} />
          ),
        })}
      />
      {openModal.open && (
        <ModalDialog
          open={openModal.open}
          title={openModal.title}
          onClose={() => setOpenModal({ open: false, values: {}, title: "" })}
        >
          <ModalContent
            values={openModal.values}
            onClose={() => setOpenModal({ open: false, values: {}, title: "" })}
            favorite={openModal.favorite}
          />
        </ModalDialog>
      )}
    </div>
  );
};
