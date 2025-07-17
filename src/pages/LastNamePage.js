import Container from '../components/Container'
import Input from '../components/Input';
import Button from '../components/Button';
import Navigation from '../components/Navigation';

export default function SecondNamePage() {

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
                <Input type="text" title="Last Name:" styling="paddingText" inputStyling="inputMargin"/>        
                <Button label="Next" nextUrl="/date-of-birth"/>
            </Container> 
        </div>
    );
}