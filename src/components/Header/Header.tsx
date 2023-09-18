import * as Styled from "./header.styles";
import HorizontalVector from "../../assets/icons/horizontal-vector.svg";
import VerticalVector from "../../assets/icons/vertical-vector.svg";
import LeftArch from "../../assets/icons/left-arch.svg";
import RightArch from "../../assets/icons/right-arch.svg";
import Search from "../../assets/icons/search.svg";
import SearchIcon from "../../assets/icons/search2.svg";
import IconSet from "../../assets/icons/line-icon-set.svg";

const Header = () => {
  return (
    <Styled.Wrapper>
      
        <Styled.SearchVector>
          <img src={Search} />
        </Styled.SearchVector>

       <div style={{display:"flex", alignItems:"center", width:"100%", gap:"2px"}}>
          <img src={LeftArch}  />
     
       
          <img src={VerticalVector} />
        

      
          <img src={VerticalVector} />
       
        
        
          <img src={HorizontalVector} style={{width:"100%"}} />
       
          </div>
          
      
        <img src={IconSet} />
      

      
        <div style={{display:"flex", alignItems:"center", width:"100%", gap:"2px"}}>
          <img src={HorizontalVector} style={{width:"100%"}} />
       

       
          <img src={VerticalVector} />
       

        
          <img src={VerticalVector} />
        
        
          <img src={RightArch} />
          </div>

        <Styled.SearchVector>
          <img src={SearchIcon} />
        </Styled.SearchVector>
     
    </Styled.Wrapper>
  );
};
export default Header;
