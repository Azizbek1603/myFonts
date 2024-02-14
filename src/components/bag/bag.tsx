import { FiX } from "react-icons/fi"
import "./bag.scss"
import { useState } from "react";
import { Fonts } from "../../types";
import ClipboardJS from "clipboard";

new ClipboardJS(".button")
new ClipboardJS(".button1")
const Bag = ({ setIsBagOpen, isBagOpen }: { setIsBagOpen: React.Dispatch<React.SetStateAction<boolean>>; isBagOpen: boolean }) => {
    const [radio, setRadio] = useState<string>("link")
    const data: Fonts = JSON.parse(localStorage.getItem("font") as string)
    return (
        <div className="bag" style={isBagOpen ? {display: "flex"} : {display: "none"}}>
            <FiX className="closeX" onClick={() => setIsBagOpen(false)}/>
            <h3>Selected Fonts</h3>
            <div className="bag-type">
                <label htmlFor="link">{"<link>"}</label>
                <input onClick={(e) => e.currentTarget.checked ? setRadio("link") : ""} type="radio" id="link" defaultChecked name="type" placeholder="<link>" />
                <label htmlFor="imp">{"@import"}</label>
                <input  type="radio" id="imp" name="type" placeholder="@import" onClick={(e) => e.currentTarget.checked ? setRadio("import") : ""}/>
            </div>
            <div className="bag-link">
                <code id="code" style={radio == "link" ? {display: "flex"} : {display: "none"}}>
                    {
                       `<link rel="preconnect" href="https://fonts.googleapis.com">
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                        <link href="https://fonts.googleapis.com/css2?
                        family=${data.family}:ital,wght@0,100;0,300;0,400;0,500;0,700;
                        0,900;1,100;1,300;1,400;1,500;1,700;
                        1,900&display=swap" rel="stylesheet">`}
                </code>
                <button style={radio == "link" ? {display: "flex"} : {display: "none"}} className="button" data-clipboard-action="copy" data-clipboard-target="#code">Copy</button>
                <code id="codes" style={radio == "import" ? {display: "flex"} : {display: "none"}}>
                    {`
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=${data.family}:ital,
                            wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;
                            1,400;1,500;1,700;1,900&display=swap')              
                        </style>
                    `}
                </code>
                <button style={radio == "import" ? {display: "flex"} : {display: "none"}} className="button1" data-clipboard-action="copy" data-clipboard-target="#codes">Copy</button>                  
            </div>
        </div>
    )
}

export default Bag