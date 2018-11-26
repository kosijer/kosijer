import React, { Component } from "react";
import axios from "axios";
import styles from "./styles.scss";
import Avatar from "../../Components/Avatar";
import Navigation from "../../Components/Navigation";

class PixaBay extends Component {
  state = {
    numberOfImages: 6,
    apiUrl: "https://pixabay.com/api",
    apiKey: "9656065-a4094594c34f9ac14c7fc4c39",
    images: []
  };

  componentDidMount() {
    let images, tempSlide;

    axios
      .get(
        `${this.state.apiUrl}/?key=${
          this.state.apiKey
        }&q=beautiful+landscape&image_type=photo&per_page=${
          this.state.numberOfImages
        }`
      )
      .then(res => {
        images = res.data.hits;
        this.setState({ images: images });
      })
      .catch(err => console.error(err));

    this.moveSlider = value => {
      if (value == "next") {
        tempSlide = this.state.images[0];
        this.state.images.shift();
        this.state.images.push(tempSlide);
      }
      if (value == "prev") {
        tempSlide = this.state.images[this.state.numberOfImages - 1];
        this.state.images.pop();
        this.state.images.unshift(tempSlide);
      }
      this.setState({ images: this.state.images });
    };
  }

  render() {
    return (
      <div className={styles.carousel}>
        <ul className={styles.carouselList}>
          {this.state.images.map(image => (
            <li className={styles.imageContainer} key={image.id}>
              <img src={image.webformatURL} />
              <div className={styles.userContainer}>
                <Avatar src={image.userImageURL} />
                <span>{image.user}</span>
              </div>
            </li>
          ))}
        </ul>
        <Navigation
          images={this.state.images}
          direction={this.state.direction}
          handleClick={this.moveSlider}
        />
      </div>
    );
  }
}

export default PixaBay;
