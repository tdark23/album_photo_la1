async function run() {
  const url = 'https://res.cloudinary.com/derspz0ir/image/upload/f_jpg,w_8,q_70/2026_05_18_12_54_IMG_5379_wr6sak.jpg';
  console.log('Fetching actual image URL:', url);
  try {
    const res = await fetch(url);
    console.log('Status:', res.status);
    const buf = await res.arrayBuffer();
    console.log('Buffer size:', buf.byteLength);
  } catch (err) {
    console.error('Error fetching actual image URL:', err);
  }
}
run();
