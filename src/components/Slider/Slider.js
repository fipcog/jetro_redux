import React from "react";
import { connect } from "react-redux";
import { setSlide, setNextSlide, setPrevSlide } from "../../actions/setSlideAction";
import Btn from "../Btn/Btn";
import BtnLeft from "../icons/BtnLeft";
import BtnRight from "../icons/BtnRight";

class Slider extends React.Component {
    onSlideClick = (e) => {
        this.props.setSlideAction(+e.target.dataset.index)
    }

    onPrevBtnClick = (e) => {
        if(e.target.closest("button")){
            this.props.prevSlideAction()

        }
    }

    onNextBtnClick = (e) => {
        if(e.target.closest("button")) {
            this.props.nextSlideAction()
        }
    }

    render() {
        const {slideIndex} = this.props.slider;
        const {worksData} = this.props.worksData;

        let slides = worksData.slice(0, 6).map((item, index) => {
            return (
                <li
                    className={index === slideIndex ? "slider__list_item slider__list_item--active" : "slider__list_item"}
                    key={item.id}
                >
                    <img className={"slider__slide_min"} data-index={index} onClick={this.onSlideClick} src={item.img_min} alt={item.name}/>
                </li>
            )
        })

        return (
            <span className={"slider"}>
                <div className={"slider__slide_container"}>
                    <img className={"slider__slide"} src={worksData[slideIndex].img_full} alt={worksData[slideIndex].name}/>
                    <Btn classRow = "btn slider__btn slider__btn--prev" onClickHandler={this.onPrevBtnClick}><BtnLeft/></Btn>
                    <Btn classRow = "btn slider__btn slider__btn--next" onClickHandler={this.onNextBtnClick}><BtnRight/></Btn>
                    <div className={"slider__slide_info"}>
                        <h2 className={"slider__slide_name"}>{worksData[slideIndex].name}</h2>
                        <p className={"slider__slide_descr"}>
                            Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel.
                            Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea.
                        </p>
                    </div>
                </div>
                <ul className={"slider__slides_list"}>
                    {slides}
                </ul>
            </span>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        slider: store.slider,
        worksData: store.worksData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        nextSlideAction: () => dispatch(setNextSlide()),
        prevSlideAction: () => dispatch(setPrevSlide()),
        setSlideAction: (index) => dispatch(setSlide(index)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider);