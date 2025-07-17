import Button from '../components/Button';
import Container from '../components/Container'
import Input from '../components/Input';
import Navigation from '../components/Navigation';

export default function FirstNamePage() {

    let navItemsList = [
        { name: "Home", styling: "nav-styling"},
        { name: "About", styling: "nav-styling"},
        { name: "Services", styling: "nav-styling"},
        { name: "Contact", styling: "nav-styling"}
    ];  

    return (
        <div className="App">
            <header className="App-header">
            <Navigation styling="nav-container" navItemsList={navItemsList}/>     
            </header>
            
            <Container styling="verticalDisplay">
                <Input type="text" title="First Name:" styling="paddingText" inputStyling="inputMargin"/>        
                <Button label="Next" nextUrl="/lastName"/>
            </Container>
            
        </div>
    );
}