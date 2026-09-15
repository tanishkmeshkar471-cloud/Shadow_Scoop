import logo from "./assets/logo.png"
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "480px",
          overflow: "hidden",
          padding: "28px 28px 0 28px",
          boxSizing: "border-box",

          background:
            "linear-gradient(to bottom, #030303 0%, #080000 15%, #260000 48%, rgb(136, 59, 0) 75%, rgb(169, 85, 0) 100%)",
        }}
      >

        <img src={logo} alt="" width={"200px"} />
        

        <div
          style={{
            position: "absolute",
            top: "25px",
            right: "32px",
            display: "flex",
            gap: "95px",
          }}
        >
          {/* NAVIGATION */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <a
              href="#about"
              style={{
                color: "#eeeeee",
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              About Us
            </a>

            <a
              href="#shop"
              style={{
                color: "#eeeeee",
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              Shop
            </a>

            <a
              href="#ingredients"
              style={{
                color: "#eeeeee",
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              Ingredients
            </a>

            <a
              href="#reviews"
              style={{
                color: "#eeeeee",
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              Reviews
            </a>

            <a
              href="#contact"
              style={{
                color: "#eeeeee",
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              Contact
            </a>
          </div>


          {/* SOCIAL LINKS */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <a
              href="#"
              style={{
                color: "#eeeeee",
                fontSize: "14px",
                textDecoration: "underline",
                textUnderlineOffset: "2px",
              }}
            >
              Instagram
            </a>

            <a
              href="#"
              style={{
                color: "#eeeeee",
                fontSize: "14px",
                textDecoration: "underline",
                textUnderlineOffset: "2px",
              }}
            >
              Facebook
            </a>

            <a
              href="#"
              style={{
                color: "#eeeeee",
                fontSize: "14px",
                textDecoration: "underline",
                textUnderlineOffset: "2px",
              }}
            >
              YouTube
            </a>

            <a
              href="#"
              style={{
                color: "#eeeeee",
                fontSize: "14px",
                textDecoration: "underline",
                textUnderlineOffset: "2px",
              }}
            >
              X
            </a>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: "28px",
            right: "28px",
            bottom: "245px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#eeeeee",
              fontSize: "13px",
            }}
          >
            © 2026 Shadow Scoop. All Rights Reserved.
          </p>

          <p
            style={{
              margin: 0,
              color: "#eeeeee",
              fontSize: "13px",
            }}
          >
            Fuel the grind. Built for results.
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            left: "0",
            bottom: "-8px",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <h1
            style={{
              marginBottom:"10px",
              padding:"2px",
              fontSize: "20vh",
              lineHeight: "0.72",
              fontWeight: "1000",
              letterSpacing: "-8px",
              textAlign: "center",

              color: "#ffffff",
            }}
          >
            SHADOW SCOOP
          </h1>
        </div>

      </div>
    </footer>
  );
};

export default Footer;