import SearchPanel from "../components/searchPanel/SearchPanel";
import ContentTable from "../components/contentTable/ContentTable";

import './MainPage.css';

const MainPage = () => {
    return (
        <section className="mainPage">
            <div className="container">
                <SearchPanel />
                <ContentTable />
            </div>
        </section>
    )

}

export default MainPage;