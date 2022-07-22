import {useState} from 'react'
import Image from "next/image"

const WorkCard = ({Item}) => {
    const [infoAvailable, setInfoAvailable] = useState(false)

    const handleMouse = () =>{
        setInfoAvailable(!infoAvailable)
    }
    console.log(infoAvailable)
  return (
    <div className='w-80 h-80' onMouseOver={handleMouse}>
        <Image src={Item.imageUrl} alt="image-one" width={320} height={320} objectFit="cover"/>
    </div>
  )
}

export default WorkCard