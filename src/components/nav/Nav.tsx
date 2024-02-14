import "./nav.scss"
import { IoMdSearch } from "react-icons/io";
import { IoBagCheckSharp } from "react-icons/io5";
const Nav = ({isSidebarOpen, setFamilySearch, setSort}: {isSidebarOpen: boolean; setFamilySearch: React.Dispatch<React.SetStateAction<string>>; setSort: React.Dispatch<React.SetStateAction<string>>}) => {
    return (
        <>
            <div className="header" style={isSidebarOpen ? { width: "calc(100% - 300px)", margin: "0 0 0 300px" } : { display: "flex" }}>
                <h1>MyFonts</h1>
                <div className="search">
                    <IoMdSearch />
                    <input type="text" placeholder="Search Fonts..." onChange={(e) => setFamilySearch(e.target.value)}/>
                    <hr />
                    <select onChange={(e) => setSort(e.target.value)}>
                        <option value="alpha">Name</option>
                        <option value="trending">Trending</option>
                        <option value="popularity">Most Popular</option>
                        <option value="date">Newest</option>
                    </select>
                </div>
                <div className="store">
                    <IoBagCheckSharp className="icon"/>
                </div>
            </div>
        </>
    )
}

export default Nav