import axios from 'axios'; 

async function createNFT(nftData) {
  try {
    if (!nftData || typeof nftData !== 'object') {
      throw new Error("Invalid NFT data");
    }

    const { name, description, image } = nftData; 

    if (!name || !description || !image) {
      throw new Error("Name, description, or image is missing");
    }

    // Generate JSON data
    const jsonData = JSON.stringify({ name, description, image });

    // Upload JSON data to datbase
    const response = await axios.post('/api/upload', { data: jsonData });

    if (response.status === 200 && response.data.success) {
      const nftLink = response.data.link;
      return nftLink;
    } else {
      throw new Error("Failed to create NFT");
    }
  } catch (error) {
    throw new Error("Failed to upload JSON data to the database: ");
  }
}

export default createNFT;
