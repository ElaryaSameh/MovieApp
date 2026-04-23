import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div 
            className="home-container d-flex align-items-center justify-content-center flex-column text-center"
            style={{ 
                backgroundImage: "url('https://pub-f354ec240bea480db7320bd0e29d972e.r2.dev/sites/2/2023/05/Background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                position: "relative",
                color: "#e0e0e0"
            }}
        >
            <div className="overlay" style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)"
            }}></div>

            <div className="content" style={{ position: "relative", zIndex: 2 }}>
                <h1 className="mb-3" style={{ fontSize: "2.8rem", fontWeight: "bold" }}>
                    Welcome to MovieWorld
                </h1>
                <p className="mb-4" style={{ fontSize: "1.3rem", opacity: "0.9" }}>
                    Discover the best movies of all time
                </p>
                
                <button 
                    className="btn"
                    style={{ 
                        backgroundColor: "#e74c3e",  
                        color: "white",
                        fontSize: "1rem",  
                        padding: "8px 20px", 
                        borderRadius: "25px", 
                        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)", 
                        transition: "all 0.3s ease",
                        marginTop: "20px" 
                    }}
                    onClick={() => navigate("/products")}
                    onMouseOver={(e) => e.target.style.backgroundColor = "#c0392b"} 
                    onMouseOut={(e) => e.target.style.backgroundColor = "#e74c3c"}
                >
                    Explore Now
                </button>
            </div>
        </div>
    );
}

export default Home;
