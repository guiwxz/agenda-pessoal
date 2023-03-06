import React from 'react';
import { RequireAuth } from 'react-auth-kit';

import { AppHeader } from '../AppHeader/appHeader';
import { ComposedProviders } from '../../store/composeProviders';

export const AppWrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <RequireAuth loginPath='/login'>
    <div style={{ display: "flex", flexDirection: 'column' }}>
      <AppHeader />
      <div style={{ padding: '10px 12%' }}>
        <ComposedProviders>
          {children}
        </ComposedProviders>
      </div>
    </div>
  </RequireAuth>
);


