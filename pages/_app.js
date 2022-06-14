import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import styled from '@emotion/styled';
import { ToastContainer } from 'react-toastify';
import { requestAdapter } from "../services/requestAdapter";
import { Footer, Sidebar } from '../components/organisms';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css'

const MainWrapper = styled.main`
    height: 100vh;
    display: flex;
    background-color: #FFFFFF;
`;

const ContentWrapper = styled.div`
    width: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const FooterWrapper = styled.div`
    height: 100%;
    width: 100%;
    overflow-y: auto;
`;

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={requestAdapter}>
        <Head>
            <title>Anilist Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/img/logo.svg" />
        </Head>
        <MainWrapper>
            <Sidebar />
            <FooterWrapper>
                <ContentWrapper>
                    <Component {...pageProps} />
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </ContentWrapper>
                <Footer />
            </FooterWrapper>
        </MainWrapper>
    </ApolloProvider>
    )
}

export default MyApp
