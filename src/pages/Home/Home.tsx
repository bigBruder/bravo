
import * as Styled from './home.styles'
import videoBg from './../../assets/video/home_background.mp4'
import Header from '../../components/Header/Header'
const Home = () => {
    return (
   
        <Styled.Wrapper>
            <video src={videoBg} autoPlay loop muted />
            <Styled.Container>
                <Header/>
            </Styled.Container>
            
            
      </Styled.Wrapper>
    )
}
export default Home;