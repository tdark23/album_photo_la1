async function run() {
  const url = 'https://res.cloudinary.com/derspz0ir/image/upload/f_jpg,w_8,q_70/samples/zoom.avif';
  console.log('Fetching:', url);
  try {
    const res = await fetch(url);
    console.log('Status:', res.status);
    const buf = await res.arrayBuffer();
    console.log('Buffer size:', buf.byteLength);
  } catch (err) {
    console.error('Error fetching with native fetch:', err);
  }
}
run();
