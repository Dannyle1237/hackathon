import DropdownButton from './DropdownButton'
import PictureScroll from './PictureScroll'
const Section = ({headerText}) =>{
    return(
        <div>
            <header>{headerText}</header>
            <DropdownButton text="Hi"></DropdownButton>
            <PictureScroll></PictureScroll>
        </div>
    )
}

export default Section