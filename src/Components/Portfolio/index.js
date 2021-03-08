import axios from 'axios'
import  React , { useEffect, useState }  from 'react'
import { PortfolioSection , PortfolioTitle , PortfolioList , PortfolioItem , Span  , Image , Overlay , OverlaySpan , ImageWrapper } from "./style.js"


const Portfolio =()=>  {

  const [images , setImages] = useState([])


 useEffect(() => {
   axios.get("js./data.json").then( res=> {setImages(res.data.Portfolio)} )
 }, [])


 const PortfolioImages = images.map((e)=>{


    return(
      <ImageWrapper key= {e.id} >
      <Image src = {e.image} alt=""/>
      <Overlay>
          <OverlaySpan>
              Show Image
          </OverlaySpan>
      </Overlay>
  </ImageWrapper>
    )
 })

    return (

      <PortfolioSection>
            <PortfolioTitle> <Span> My </Span> Portfolio </PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active> All </PortfolioItem>
                <PortfolioItem> HTML       </PortfolioItem>
                <PortfolioItem> Photoshop  </PortfolioItem>
                <PortfolioItem> Wordpress  </PortfolioItem>
                <PortfolioItem> Mobile     </PortfolioItem>
            </PortfolioList>
            
                


            <div class="box">
              
                {PortfolioImages  }
                
            </div>
            
        </PortfolioSection>
    )
}
export default Portfolio
