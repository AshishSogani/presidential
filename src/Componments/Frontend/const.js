export const getImages = (imageName) => {
    const image = require(`../../assets/img/${imageName}`);
    return image;
}

export const LazyImage = ({ src, alt }) => {
    return (
            <img src={src} alt={alt} />
    );
};