import axios from 'axios';

const searchImages= async (term) => {
    const response=await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID eq6oT-RlQAw9RZ7DFLG5DMT6hOnqNYwnNsEykdA57Vk',
        },
        params: {
            query:term,
        },
    });
    
    return response.data.results;
};

export default searchImages;