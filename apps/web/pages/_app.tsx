import { AppProps } from 'next/app';
import { ChakraProvider, Portal, Switch, useDisclosure } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar/Sidebar.js";
import theme from '../theme/theme'
import routes from "../routes.js";

import Head from 'next/head';
import './styles.css';
import { useRef, useState } from 'react';
import MainPanel from '../components/Layout/MainPanel.js';
import PanelContent from '../components/Layout/PanelContent.js';
import PanelContainer from '../components/Layout/PanelContainer.js';
import AdminNavbar from '../components/Navbars/AdminNavbar.js';

function CustomApp({ Component, pageProps }: AppProps) {
  const [sidebarVariant, setSidebarVariant] = useState("transparent");
  const mainPanel = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [fixed, setFixed] = useState(false);

  return (

    <>
      <Head>
        <title>Welcome to web!</title>
      </Head>
      <main className="app">
        <ChakraProvider theme={theme} resetCSS={false}>
          <Sidebar
            routes={routes}
            logoText={"PURITY UI DASHBOARD"}
          // display="none"
          // sidebarVariant={sidebarVariant}
          // {...rest}
          />
          <Portal>

            <MainPanel
              ref={mainPanel}
              w={{
                base: "100%",
                xl: "calc(100% - 275px)",
              }}
            >
              <Portal>
                <AdminNavbar
                  onOpen={onOpen}
                  // logoText={"PURITY UI DASHBOARD"}
                  // brandText={"getActiveRoute(routes)"}
                  fixed={fixed}
                // {...rest}
                />
              </Portal>
              <PanelContent>
                <PanelContainer>
                  <Component {...pageProps} />
                </PanelContainer>
              </PanelContent>
            </MainPanel>
          </Portal>
        </ChakraProvider>
      </main>
    </>
  );
}

export default CustomApp;
