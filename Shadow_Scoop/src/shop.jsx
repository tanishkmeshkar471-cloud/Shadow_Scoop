import strawberry from "./assets/strawberry flavour.png"
import mango from "./assets/mango flavour.png"
import caramel from "./assets/caramel flavour.png"
import vanilla from "./assets/vanilla flavour.png"
import chocolate from "./assets/image2.png"
import Flavours from "./flavours"
function Shop(){
    return(
        <>
     <style>
        {`
          @keyframes rotating {
            from {
              transform: perspective(var(--perspective))
                rotateX(var(--rotateX))
                rotateY(0);
            }

            to {
              transform: perspective(var(--perspective))
                rotateX(var(--rotateX))
                rotateY(360deg);
            }
          }
        `}
      </style>

      <div
        style={{
          width: "100%",
          height: "500px",
          background: "blacl",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            "--quantity": 10,
            "--w": "155px",
            "--h": "200px",
            "--translateZ": "250px",
            "--rotateX": "-15deg",
            "--perspective": "1000px",

            position: "absolute",
            width: "var(--w)",
            height: "var(--h)",
            top: "20%",
            left: "calc(50% - 50px)",

            transformStyle: "preserve-3d",
            animation: "rotating 150s linear infinite",
          }}
        >
        {/* CARD 1 */}
<div
  style={{
    position: "absolute",
    inset: 0,
    border: "2px solid white",
    borderRadius: "12px",
    overflow: "hidden",
    transform: "rotateY(0deg) translateZ(var(--translateZ))",
  }}
>
  <img
    src={chocolate}
    alt="Strawberry"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    }}
  />
</div>

{/* CARD 2 */}
<div
  style={{
    position: "absolute",
    inset: 0,
    border: "2px solid white",
    borderRadius: "12px",
    overflow: "hidden",
    transform: "rotateY(36deg) translateZ(var(--translateZ))",
  }}
>
  <img
    src={mango}
    alt="Strawberry"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    }}
  />
</div>

{/* CARD 3 */}
<div
  style={{
    position: "absolute",
    inset: 0,
    border: "2px solid white",
    borderRadius: "12px",
    overflow: "hidden",
    transform: "rotateY(72deg) translateZ(var(--translateZ))",
  }}
>
  <img
    src={caramel}
    alt="Strawberry"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    }}
  />
</div>

{/* CARD 4 */}
<div
  style={{
    position: "absolute",
    inset: 0,
    border: "2px solid white",
    borderRadius: "12px",
    overflow: "hidden",
    transform: "rotateY(108deg) translateZ(var(--translateZ))",
  }}
>
  <img
    src={vanilla}
    alt="Strawberry"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    }}
  />
</div>

{/* CARD 5 */}
<div
  style={{
    position: "absolute",
    inset: 0,
    border: "2px solid white",
    borderRadius: "12px",
    overflow: "hidden",
    transform: "rotateY(144deg) translateZ(var(--translateZ))",
  }}
>
  <img
    src={strawberry}
    alt="Strawberry"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    }}
  />
</div>

{/* CARD 6 */}
<div
  style={{
    position: "absolute",
    inset: 0,
    border: "2px solid white",
    borderRadius: "12px",
    overflow: "hidden",
    transform: "rotateY(180deg) translateZ(var(--translateZ))",
  }}
>
  <img
    src={strawberry}
    alt="Strawberry"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    }}
  />
</div>

{/* CARD 7 */}
<div
  style={{
    position: "absolute",
    inset: 0,
    border: "2px solid white",
    borderRadius: "12px",
    overflow: "hidden",
    transform: "rotateY(216deg) translateZ(var(--translateZ))",
  }}
>
  <img
    src={strawberry}
    alt="Strawberry"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    }}
  />
</div>

{/* CARD 8 */}
<div
  style={{
    position: "absolute",
    inset: 0,
    border: "2px solid white",
    borderRadius: "12px",
    overflow: "hidden",
    transform: "rotateY(252deg) translateZ(var(--translateZ))",
  }}
>
  <img
    src={strawberry}
    alt="Strawberry"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    }}
  />
</div>

{/* CARD 9 */}
<div
  style={{
    position: "absolute",
    inset: 0,
    border: "2px solid white",
    borderRadius: "12px",
    overflow: "hidden",
    transform: "rotateY(288deg) translateZ(var(--translateZ))",
  }}
>
  <img
    src={strawberry}
    alt="Strawberry"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    }}
  />
</div>

{/* CARD 10 */}
<div
  style={{
    position: "absolute",
    inset: 0,
    border: "2px solid white",
    borderRadius: "12px",
    overflow: "hidden",
    transform: "rotateY(324deg) translateZ(var(--translateZ))",
  }}
>
  <img
    src={strawberry}
    alt="Strawberry"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    }}
  />
</div>
        </div>
      </div>
  <Flavours />
    </>
  );
};
export default Shop