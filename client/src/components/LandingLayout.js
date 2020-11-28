import React from "react"
// import { Form, Button} from "react-bootstrap";
import "./style/landingLayout.css"
import LoginLayout from "./LoginLayout.js"
import SignupLayout from "./SignupLayout"

const LandingLayout = () => {

    return (
        <div className="text-center">
            <img className="img-fluid" src="/img/homepic.jpg" alt="serumHand" />
            <div class="container centered">
                <div>
                    <p>
                        Cats woo love me! meeeeouw. Cry louder at reflection climb into cupboard and lick the salt off rice cakes chirp at birds i hate cucumber pls dont throw it at me but bird bird bird bird bird bird human why take bird out i could have eaten that but head nudges . Cats are the world fall asleep on the washing machine purr when give birth for take a deep sniff of sock then walk around with mouth half open there's a forty year old lady there let us feast, or i love cats i am one wake up scratch humans leg for food then purr then i have a and relax asdflkjaertvlkjasntvkjn (sits on keyboard). Attack feet. Rub my belly hiss. Cat milk copy park pee walk owner escape bored tired cage droppings sick vet vomit open the door, let me out, let me out, let me-out, let me-aow, let meaow, meaow! i like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck, watching the horizon, dreaming of a good bowl of milk. Throwup on your pillow i show my fluffy belly but it's a trap! if you pet it i will tear up your hand. Run off table persian cat jump eat fish groom forever, stretch tongue and leave it slightly out, blep and ask to go outside and ask to come inside and ask to go outside and ask to come inside. Find something else more interesting chase mice meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat.
                    </p>
                </div>
                <div class="row">
                    <div class="col">
                        <div>
                            <LoginLayout />
                        </div>
                    </div>
                    <div class="col">
                        <div>
                            <SignupLayout />
                        </div>
                    </div>
                </div>

            </div>

            {/* <Form className="footer">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className="emailArea" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="passwordArea" type="password" placeholder="Password" />
                </Form.Group>
                <Button className="landinglogin" variant="dark" type="submit">
                    Log In
                 </Button>
            </Form> */}
            {/* change the img file to googledrive */}
        </div>
    )
}

export default LandingLayout;