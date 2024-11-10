import React from 'react'
import Footer from '../widgets/Footer'
import AppBar from '../widgets/AppBar'

const Home = () => {
    return (
        <div>
            <AppBar title={"Home"} />
            <div className="abs" style={{ padding: "10px" }}>
                <img src="https://fps.cdnpk.net/home/banner-tools-v2/upscale.webp" className='img-fluid' style={{ borderRadius: "10px" }} />
                <br />
                <br />
                <h5>DEV SEC IT TEAM</h5>
                lorem hello
                <h1>Hello :) 1+2</h1>
                <button className='btn btn-primary pl-5 pr-5 mb-5' onClick={() => { alert("hello") }}>Click me </button>

                <video src="https://flutter.github.io/assets-for-api-docs/assets/videos/bee.mp4"
                    poster='https://fps.cdnpk.net/home/banner-tools-v2/upscale.webp' className='img-fluid' style={{ borderRadius: "10px" }} controls autoPlay muted></video>

                <img src="https://fps.cdnpk.net/home/banner-tools-v2/upscale.webp" className='img-fluid' style={{ borderRadius: "10px" }} />
                <br />
                <br />
                <h5>DEV SEC IT TEAM</h5>
                lorem hello
                <h1>Hello :) 1+2</h1>
                <img src="https://fps.cdnpk.net/home/banner-tools-v2/upscale.webp" className='img-fluid' style={{ borderRadius: "10px" }} />
                <br />
                <br /><br />
                <br />
            </div>
            <Footer />
        </div>
    )
}

export default Home
