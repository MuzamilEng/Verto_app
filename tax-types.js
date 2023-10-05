import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import SettingsSidebar from "../layouts/SettingsSidebar";
import TaxTypes from "../settings/TaxTypes";

const TaxTypesPage = () => {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Kanakku</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>
            <TaxTypes />
        </>
    );
};

TaxTypesPage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        <div>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-6">
                                <h3 className="page-title">Settings</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link href="/">
                                            <a>Dashboard</a>
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Tax Types
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-md-4">
                            <SettingsSidebar />
                        </div>
                        {page}
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);

export default TaxTypesPage;
