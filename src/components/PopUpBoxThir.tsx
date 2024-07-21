import { MapPin } from "lucide-react";
import { useState } from "react";

const MarkerReturn = () => {
  return (
    <div className="parent-pin third-m">
      <div className="box"></div>
    </div>
  );
};
const PopUpBoxThir = (position : any) => {
  const [isHovering, setIsHovering] = useState(false);
    console.log(position)
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div>
      <div>
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <MapPin className={`parent-pin third`} />
        </div>

        {isHovering && <MarkerReturn />}
      </div>
    </div>
  );
};

export default PopUpBoxThir;