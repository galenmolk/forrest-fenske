import axios from 'axios';

const getImages = async (manifest, action) => {
    try {
        const response = await axios.get(manifest);
        action(response.data.resources.map(r => {
            const url = `https://res.cloudinary.com/cloudkeeper/image/upload/v${r.version}/${r.public_id}.jpg`;
            
            return {
                original: url,
                thumbnail: url,
                thumbnailClass: 'thumbnail'
            }
        }))
    } catch (error) {
        console.error(error);
    }
};

export {getImages};
