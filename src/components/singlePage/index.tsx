import { FiShoppingBag } from "react-icons/fi";
import { Fonts } from "../../types";
import Bag from "../bag/bag";
import "./style.scss"
import { useState } from "react";
const SingleFamily = () => {
    const [fontSize, setFontSize] = useState<number>(40)
    const [typing, setTyping] = useState<string>("")
    const [isBagOpen, setIsBagOpen] = useState<boolean>(true)
    const data: Fonts = JSON.parse(localStorage.getItem("font") as string)

    const handleFontWeight = (variant : string): any => {
        if(variant == "regular") return 400
        if(variant == "italic") return 400
        if(variant.includes("italic")){
            return +variant.split("italic").join("")
        }
        else{
            return variant
        }
    }
    const handleFontType =(variant: string): any => {
        if(variant == "regular") return "Regular"
        if(variant == "italic") return "Regular italic"
        if(variant.includes("italic")){
           return +variant.split("italic").join("") > 400 ? "Bold  " + +variant.split("italic").join("") : "Thin  " + +variant.split("italic").join("")
        }
        else{
            return +variant > 400 ? "Bold  " + variant : "Thin  " + variant
        }
    }  

    return (
        <>
            <style key={data.family}>
                {`@font-face {
                font-family: "${data.family}";
                src: url("${data.files.regular}") ;
                }`}
            </style>
            <FiShoppingBag className="openBag" onClick={() => setIsBagOpen(true)}/>
            <Bag setIsBagOpen={setIsBagOpen} isBagOpen={isBagOpen}/>
            <div className="selected">
                <h1 className="name" style={{fontFamily: data.family}}>{data.family}</h1>
                <h3 style={{fontFamily: data.family}}>Whereas disregard and contempt <br /> for human rights have resulted</h3>
                <div className="styles">
                    <h2>Styles</h2>
                    <div className="input">
                        <input type="text" placeholder="Type here to preview the text" onChange={(e) => setTyping(e.target.value)} />
                        <label htmlFor="input">Font Size: {fontSize}</label>
                        <input type="range" onChange={(e) => setFontSize(+e.target.value)} defaultValue={fontSize} max={300} min={8} />
                    </div>
                    <hr />
                    {
                        <div className='selected_font-family' style={{overflow: "hidden"}}>
                            {
                                data.variants.map((variant, index) =>
                                    <div key={index} style={{padding: "10px 0px"}}>
                                        <h4>{handleFontType(variant)}</h4>
                                        <p style={{ fontSize: fontSize, width: "120000%", fontWeight: handleFontWeight(variant), fontFamily: data.family, fontStyle: variant.includes("italic") ? "italic" : "normal"}}>{typing.trim() ? typing : "Whereas recognition of the inherent dignity"}</p>
                                        <hr />
                                    </div>
                                )
                            }
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default SingleFamily