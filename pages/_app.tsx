import {FC} from "react";
import {AppProps} from "next/app";
import {MainLayout} from "../core/layouts/MainLayout";


const App: FC = ({Component, pageProps}: AppProps) => {
    const Layout = MainLayout(Component)
    return <Layout {...pageProps}/>;
}

export default App;