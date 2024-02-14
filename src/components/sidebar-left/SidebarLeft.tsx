import "./sidebar-left.scss"
import { GrPowerReset } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import { FaFolder } from "react-icons/fa6";
import { FaDotCircle } from "react-icons/fa";
const SidebarLeft = ({ isSidebarOpen, checked, setChecked, props, setProps, setIsSidebarOpen, setTyping, fontSize, setFontSize }: { isSidebarOpen: boolean; checked: string[]; setChecked: React.Dispatch<React.SetStateAction<string[]>>; props: number; setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>; setTyping: React.Dispatch<React.SetStateAction<string>>; setFontSize: React.Dispatch<React.SetStateAction<number>>; fontSize: number; setProps: React.Dispatch<React.SetStateAction<number>> }) => {
    return (
        <div className="sidebar" style={isSidebarOpen ? { display: "flex" } : { display: "none" }}>
            <div className="reset">
                <p onClick={() => window.location.reload()}> <GrPowerReset /> Reset all</p>
                <IoClose className="svg-close" onClick={() => setIsSidebarOpen(false)} />
            </div>
            <div className="preview">
                <h2>Preview</h2>
                <textarea placeholder="Type something" onChange={(e) => setTyping(e.target.value)}></textarea>
                <label htmlFor="font">Font Size: {fontSize}px</label>
                <input id="font" min={8} max={300} defaultValue={fontSize} onChange={(e) => setFontSize(+e.target.value)} type="range" />
            </div>
            <hr />
            <div className="filter">
                <h2>Filter</h2>
                <div className="decorative">
                    <h3> <FaFolder /> Classification</h3>
                    <div className="radio">
                        <input type="checkbox" onChange={(e) =>{ e.target.checked ? (checked.includes(e.target.id) ? "" : setChecked([...checked, e.target.id])) : (checked.includes(e.target.id) ? checked.splice(checked.indexOf(e.target.id), 1) : "")}} id="display" name="check" />
                        <label htmlFor="Display">Display</label>
                    </div>

                    <div className="radio">
                        <input type="checkbox" onChange={(e) =>{ e.target.checked ? (checked.includes(e.target.id) ? "" : setChecked([...checked, e.target.id])) : (checked.includes(e.target.id) ? checked.splice(checked.indexOf(e.target.id), 1) : "")}} id="handwriting" name="check" />
                        <label htmlFor="handwriting">Handwriting</label>
                    </div>

                    <div className="radio">
                        <input
                            type="checkbox" onChange={(e) =>{ e.target.checked ? (checked.includes(e.target.id) ? "" : setChecked([...checked, e.target.id])) : (checked.includes(e.target.id) ? checked.splice(checked.indexOf(e.target.id), 1) : "")}} id="monospace" name="check" />
                        <label htmlFor="Monospace">Monospace</label>
                    </div>
                    <div className="radio">
                        <input type="checkbox" onChange={(e) =>{ e.target.checked ? (checked.includes(e.target.id) ? "" : setChecked([...checked, e.target.id])) : (checked.includes(e.target.id) ? checked.splice(checked.indexOf(e.target.id), 1) : "")}} id="not text" name="check" />
                        <label htmlFor="Not text">Not Text</label>
                    </div>
                    <div className="radio">
                        <input type="checkbox" onChange={(e) =>{ e.target.checked ? (checked.includes(e.target.id) ? "" : setChecked([...checked, e.target.id])) : (checked.includes(e.target.id) ? checked.splice(checked.indexOf(e.target.id), 1) : "")}} id="serif" name="check" />
                        <label htmlFor="serif">Serif</label>
                    </div>
                    <div className="radio">
                        <input type="checkbox" onChange={(e) =>{ e.target.checked ? (checked.includes(e.target.id) ? "" : setChecked([...checked, e.target.id])) : (checked.includes(e.target.id) ? checked.splice(checked.indexOf(e.target.id), 1) : "")}} id="sans-serif" name="check" />
                        <label htmlFor="sans-serif">Sans Serif</label>
                    </div>
                </div>
                <div className="properties">
                    <h3> <FaDotCircle /> Properties</h3>
                    <div>
                        <label htmlFor="style">Styles: {props}</label>
                        <input type="range" defaultValue={props} onChange={(e) => setProps(+e.target.value)} min={1} max={18} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarLeft