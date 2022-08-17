import ScrollToTop from "react-scroll-to-top";

function ScrollTop ()
{
  return (
    <ScrollToTop
      smooth
      color="white"
      width="30"
      height="30"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
      svgPath="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
      className="animate-bounce px-3 pb-1"
      style={ {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#30D5C8",
        border: "3px solid white",
        width: "60px",
        height: "60px",
        borderRadius: 30,
      } }
    />
  )
}

export default ScrollTop;
