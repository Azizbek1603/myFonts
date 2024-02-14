import { useEffect, useState } from "react"
import { Fonts } from "../../types"
import FontFamily from "../../layout/FontFamily"
import { BsListNested } from "react-icons/bs";
import "./home.scss"
import SidebarLeft from "../../components/sidebar-left/SidebarLeft"
import Nav from "../../components/nav/Nav";
import { v1 } from 'uuid';
import axios from "axios";
const Home = () => {
    const [typing, setTyping] = useState<string>("")
    const [fonts, setFonts] = useState<Fonts[]>([])
    const [props, setProps] = useState<number>(1)
    const [sort, setSort] = useState<string>("alpha")
    const [filterFont, setFilterFont] = useState<Fonts[]>([])
    const [fontSize, setFontSize] = useState<number>(30)
    const [familySearch, setFamilySearch] = useState<string>("")
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
    const [checked, setChecked] = useState<string[]>([])

    useEffect(() => {
        const fetchFonts = async () => {
            const response = await axios(`https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDNfxBWcrzAfII4mzvrNqWIVlkSxo-_xWw&sort=${sort}`)
            setFonts(response.data.items)
        }

        fetchFonts()
    }, [sort])


    useEffect(() => {
        const filtering = () => {
            props !== 1 ? setFilterFont(((familySearch.trim().length > 0 || checked.length > 0) ? filterFont : fonts).filter(font => font.variants.length >= props)) : ""
        }
        filtering()
    }, [props])
    useEffect(() => {
        const familyFiltering = () => {
            familySearch.trim().length > 0 ? setFilterFont(((props !== 1 || checked.length > 0) ? filterFont : fonts).filter(font => font.family.toLowerCase().includes(familySearch.toLowerCase()))) : ""
        }
        familyFiltering()
    }, [familySearch])
    useEffect(() => {
        const CategoryFiltering = () => {
            checked.length > 0 ? setFilterFont(((props !== 1 || familySearch.length > 0) ? filterFont : fonts).filter(font => checked.includes(font.category))) : ""
        }
        CategoryFiltering()
    }, [checked])


    return (
        <>
            <Nav isSidebarOpen={isSidebarOpen} setSort={setSort} setFamilySearch={setFamilySearch} />
            <button className="filter-btn" style={isSidebarOpen ? { margin: "0 0 0 330px", background: "#0000ff", color: "#fff" } : { display: "flex" }} onClick={() => isSidebarOpen ? setIsSidebarOpen(false) : setIsSidebarOpen(true)}><BsListNested />Filters</button>
            <SidebarLeft checked={checked} setChecked={setChecked} isSidebarOpen={isSidebarOpen} props={props} setProps={setProps} setIsSidebarOpen={setIsSidebarOpen} setTyping={setTyping} fontSize={fontSize} setFontSize={setFontSize} />
            <div className="home" key={v1()} style={isSidebarOpen ? { width: "calc(100% - 300px)", margin: "0 0 0 300px" } : { display: "block" }}>
                {(familySearch || props !== 1 || checked.length > 0 ) ?
                    filterFont?.map((font: Fonts, index) =>
                        <>
                            <FontFamily key={index} fontSize={fontSize} data={font} typing={typing} />
                        </>
                    )
                    :
                    fonts?.map((font: Fonts, index) =>
                        <>
                            <FontFamily key={index} fontSize={fontSize} data={font} typing={typing} />
                        </>
                    )
                }
            </div>
        </>
    )
}

export default Home