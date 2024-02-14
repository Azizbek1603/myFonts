import { Link } from 'react-router-dom'
import { Fonts } from '../types'
import "./style.scss"
const FontFamily = ({ data, typing, fontSize }: { data: Fonts; typing: string; fontSize: number }) => {
  return (
    <>
    <style key={data.family}>
        {`@font-face {
        font-family: "${data.family}";
        src: url("${data.files.regular}") ;
      }`}
      </style>
      {data ?
        <Link to={`${data.family}`} onClick={() => localStorage.setItem("font", JSON.stringify(data))} className='font-family'>
          <div className="font-family__header" style={{fontFamily: data.family}}>
            <p style={{fontFamily: data.family}}>{data.family}</p>
            <p style={{fontFamily: data.family}}>{data.category}</p>
            <span style={{fontFamily: data.family}}>{+data.variants.length === 1 ? data.variants.length + " style" : data.variants.length + " styles"}</span>
          </div>
          <h2 translate='no' style={{ fontSize: fontSize, fontFamily: data.family }}>{typing.trim() ? typing : "Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance. Everyone has the right to freedom of opinion and expression; this right includes freedom to hold opinions without interference and to seek, receive and impart information and ideas through any media and regardless of frontiers. Everyone has the right to rest and leisure, including reasonable limitation of working hours and periodic holidays with pay."}</h2>
          <hr />
        </Link>
        :
        <h1 className='font-family'>No any font families</h1>
      }
    </>
  )
}

export default FontFamily