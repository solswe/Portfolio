import {useState} from "react";
import {Image, Button} from "@nextui-org/react";
import {ChevronIcon} from "./Icon/ChevronIcon";

const ImgSlider = ({photos}) => {
  const [curImg, setCurImg] = useState(0);

  const goToPrev = () => {
    const isFirst = curImg === 0;
    const newImg = isFirst? photos.length - 1 : curImg - 1 ;
    setCurImg(newImg);
  }

  const goToNext = () => {
    const isLast = curImg === photos.length - 1;
    const newImg = isLast? 0 : curImg + 1 ;
    setCurImg(newImg);
  }

  const jumpToPhoto = (photoId) => {
    setCurImg(photoId);
  }
  
  return (
    <>
      <div className="imgSlider-cont">
        <Button isIconOnly className="img-chevron" onClick={goToPrev}>      
          <ChevronIcon />
        </Button> 
        <div className="img-cont">
          <Image src={photos[curImg].url} alt="YumYumTok" className="detail-photo"/>
        </div>
        <Button isIconOnly className="img-chevron" onClick={goToNext}>      
          <ChevronIcon className="rotate-180" />
        </Button>  
      </div>
      <div className="pagination">
        {photos.map((photo, photoId) => (
          <div 
            key={photoId} 
            onClick={() => jumpToPhoto(photoId)} 
            className={`pagination-icon ${curImg === photoId ? 'active' : ''}`}
          >●</div>
        ))}
      </div>
    </>
  )
}

export default ImgSlider;

