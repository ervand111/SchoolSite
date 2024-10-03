// /pages/api/getImageAsBase64.js
export default async function handler(req, res) {
  const { imageUrl } = req.query;

  try {
    // Fetch the image
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image. Status: ${response.status}`);
    }

    // Convert the image to a blob
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Convert the buffer to a base64 string
    const base64Image = `data:${response.headers.get('content-type')};base64,${buffer.toString('base64')}`;

    // Send the base64 image back to the client
    res.status(200).json({ base64Image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to convert image to Base64' });
  }
}
