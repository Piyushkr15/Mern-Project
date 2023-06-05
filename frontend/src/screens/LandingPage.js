import { Button, Container, Row } from "react-bootstrap";
import "./LandingStyles.css";
import { Link } from "react-router-dom";

function LandingPage() {
    // const { userInfo } = userLogin;

    // useEffect(() => {
    //     const userInfo = localStorage.getItem("uesrInfo");
    //     if (userInfo) {
    //         history.push("/mynotes");
    //     }
    // }, [history]);
    return (
        <div className="main">
            <Container>
                <Row>
                    <div className="intro-text">
                        <div>
                            <h1 className="title">Welcome to NotesWriter</h1>
                            <p className="subtitle">Write your thoughts with privacy</p>
                        </div>
                        <div className="buttonContainer">
                            <Link to="/login">
                                <Button size="lg" className="landingbutton">
                                    Login
                                </Button>

                            </Link>
                            <Link to="/register">
                                <Button
                                    variant="outline-primary"
                                    size="lg"
                                    className="landingbutton"
                                >
                                    Signup
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default LandingPage;