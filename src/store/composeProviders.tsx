import { ContactsProvider } from "./contacts/contactsProvider";
import { PeopleProvider } from "./people/peopleProvider";
import { SnackBarProvider } from "./snackbar/snackBarProvider";
import { UsersProvider } from "./users/usersProvider";


const composeProviders = (...providers: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>) => 
  ({ children }: any) =>
    providers.reduceRight(
      (childrenProvider, Provider) => 
        <Provider>
          {childrenProvider}
        </Provider>,
      children 
    );
  


export const ComposedProviders = composeProviders(
  SnackBarProvider,
  PeopleProvider,
  ContactsProvider,
  UsersProvider
);